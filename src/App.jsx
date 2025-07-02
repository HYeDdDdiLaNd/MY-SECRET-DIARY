import { Route, Routes } from 'react-router-dom';
import { useRef, useReducer, createContext } from 'react';
import './App.scss';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import New from './pages/New';
import Home from './pages/Home';
import Notfound from './pages/Notfound';

const mockData = [
  {
    id: 0,
    date: new Date().getTime(),
    emotionId: 1,
    content: '런던 베이글 마싯슴',
  },
  {
    id: 1,
    date: new Date(2025, 6, 30).getTime(),
    emotionId: 2,
    content: '런던 베이글 마싯슴2',
  },
  {
    id: 2,
    date: new Date(2025, 5, 30).getTime(),
    emotionId: 5,
    content: '런던 베이글',
  },
  {
    id: 3,
    date: new Date(2025, 4, 2).getTime(),
    emotionId: 3,
    content:
      '런던 베이글 마싯슴2런던 베이글 마싯슴2런던 베이글 마싯슴2런던 베이글 마싯슴2',
  },
  {
    id: 4,
    date: new Date(2025, 1, 2).getTime(),
    emotionId: 4,
    content:
      '런던 베이글 마싯슴2런던 베이글 마싯슴2런던 베이글 마싯슴2런던 베이글 마싯슴2',
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATED':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) =>
        Number(item.id) === Number(action.data.id) ? action.data : item
      );
    case 'DELETE':
      return state.filter((item) => Number(item.id) !== Number(action.id));
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const diaryId = useRef(5);
  const [state, dispatch] = useReducer(reducer, mockData);

  //새로운 일기 추가
  const onCreatedDiary = (id, date, emotionId, content) => {
    dispatch({
      type: 'CREATED',
      data: {
        id: diaryId.current++,
        date: new Date().getTime(),
        emotionId: 3,
        content: '새롭게 추가한 일기',
      },
    });
  };

  //기존 일기 수정
  const onUpdateDiary = (id, date, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id: 1,
        date: new Date().getTime(),
        emotionId: 5,
        content: '수정함',
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
            value={(onCreatedDiary, onUpdateDiary, onDeleteDiary)}
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
