import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import New from './pages/New';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Button from './components/Button';
import Header from './components/Header';

//import getEmotionImage from './util/get-emotion-image';
function App() {
  //const nav = useNavigate();
  // const onClickEvent = () => {
  //   nav('/new');
  // };
  return (
    <div className="wrapper">
      <Header
        title={'Home'}
        leftChild={<Button text={'이전'} onClick={onclick} />}
        rightChild={<Button text={'다음'} onClick={onclick} />}
      ></Header>
      <div>
        {/* Routes 밖에 배치된 요소들은 모든 페이지에 공통적으로 보여진다.
        공통적으로 보여지는 요소가 아니면 Routes 안에 배치되어야한다. */}
        {/* <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>
        <button onClick={onClickEvent}>new 페이지를 이벤트로 이동</button> */}
        <Routes>
          {/* Routes 안에는 Route만 들어갈 수 있음. 새로고침 */}
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
          {/* url parameter */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
