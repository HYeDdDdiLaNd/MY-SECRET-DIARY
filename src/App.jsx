import { Route, Routes } from 'react-router-dom';
import { useState, useRef, useReducer, createContext, useEffect } from 'react';
import './App.scss';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import New from './pages/New';
import Home from './pages/Home';
import Notfound from './pages/Notfound';

// const mockData = [
//   {
//     id: 0,
//     date: new Date().getTime(),
//     emotionId: 1,
//     content: '런던 베이글 마싯슴',
//   },
//   {
//     id: 1,
//     date: new Date(2025, 6, 30).getTime(),
//     emotionId: 2,
//     content: '런던 베이글 마싯슴2',
//   },
//   {
//     id: 2,
//     date: new Date(2025, 5, 30).getTime(),
//     emotionId: 5,
//     content: '런던 베이글',
//   },
//   {
//     id: 3,
//     date: new Date(2025, 4, 2).getTime(),
//     emotionId: 3,
//     content:
//       '런던 베이글 마싯슴2런던 베이글 마싯슴2런던 베이글 마싯슴2런던 베이글 마싯슴2',
//   },
//   {
//     id: 4,
//     date: new Date(2025, 1, 2).getTime(),
//     emotionId: 4,
//     content:
//       '런던 베이글 마싯슴2런던 베이글 마싯슴2런던 베이글 마싯슴2런던 베이글 마싯슴2',
//   },
// ];

function reducer(state, action) {
  let nextState;
  switch (action.type) {
    case 'INIT':
      return action.data; //parsed
    case 'CREATED': {
      nextState = [action.data, ...state];
      break;
    } //웹스토리지 저장을 위해 리턴을 빼고 브레이크를 걸어줌.
    case 'UPDATE': {
      nextState = state.map((item) =>
        Number(item.id) === Number(action.data.id) ? action.data : item
      );
      break;
    }
    case 'DELETE': {
      nextState = state.filter((item) => Number(item.id) !== Number(action.id));
      break;
    }
    default:
      return state;
  }
  localStorage.setItem('diaryData', JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true); //hooks의 useData가 먼저 실행되어서 추가함.
  const diaryId = useRef(0);
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    //마운트 되고 나서 바로 localStorage 웹스토리지의 데이터 가져와서 state의 초기값으로 셋팅
    const storedData = localStorage.getItem('diaryData');
    if (!storedData) {
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) maxId = Number(item.id);
    });

    diaryId.current = maxId + 1;

    dispatch({
      type: 'INIT',
      data: parsedData,
    });
    setIsLoading(false);
  }, []);

  // localStorage.setItem('test', 'hello'); //반대로 session도 있는데, 탭이 닫히면 스토리지 내역이 지워짐.
  // localStorage.setItem('user', JSON.stringify({ name: '정혜진' })); 사용자가 직접 삭제하기 전까지 남아있음.

  // console.log(localStorage.getItem('user')); // 문자열 형태로 가져오기 때문에
  // console.log(JSON.parse(localStorage.getItem('user'))); //parse를 쓰는데 꼭 undefined가 아닐때만 사용해야한다.

  // localStorage.removeItem('user'); //삭제하는 방법 1 혹은 웹브라우저 > 개발자도구 > 어플리케이션에서 직접 삭제

  //웹 스토리지에는 새로운 일기가 추가되거나, 기존 일기가 수정되거나, 일기가 삭제될 떄 그 값들을 저장하면된다.

  //새로운 일기 추가
  const onCreatedDiary = (date, emotionId, content) => {
    dispatch({
      type: 'CREATED',
      data: {
        id: diaryId.current++,
        date: new Date(date).getTime(),
        emotionId,
        content,
      },
    });
  };

  //기존 일기 수정
  const onUpdateDiary = (id, date, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id: Number(id),
        date: new Date(date).getTime(),
        emotionId,
        content,
      },
    });
  };

  //일기 삭제
  const onDeleteDiary = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  if (isLoading) return <div>데이터 로딩중...</div>;
  return (
    <div className="wrapper">
      <div>
        {/* Routes 밖에 배치된 요소들은 모든 페이지에 공통적으로 보여진다.
        공통적으로 보여지는 요소가 아니면 Routes 안에 배치되어야한다. */}
        {/* <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>
        <button onClick={onClickEvent}>new 페이지를 이벤트로 이동</button> */}
        <DiaryStateContext.Provider value={state}>
          <DiaryDispatchContext.Provider
            value={{ onCreatedDiary, onUpdateDiary, onDeleteDiary }}
          >
            <Routes>
              {/* Routes 안에는 Route만 들어갈 수 있음. 새로고침 */}
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit/:id" element={<Edit />} />
              {/* url parameter */}
              <Route path="*" element={<Notfound />} />
            </Routes>
          </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
      </div>
    </div>
  );
}

export default App;
