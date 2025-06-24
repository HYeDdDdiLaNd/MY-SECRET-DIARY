import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Diary from './pages/Diary';
import New from './pages/New';
import Home from './pages/Home';
import Notfound from './pages/Notfound';

import emotion1 from './assets/emotion1.png';
import emotion2 from './assets/emotion2.png';
import emotion3 from './assets/emotion3.png';
import emotion4 from './assets/emotion4.png';
import emotion5 from './assets/emotion5.png';

function App() {
  const nav = useNavigate();
  const onClickEvent = () => {
    nav('/new');
  };
  return (
    <>
      <div>
        <img src={'/emotion1.png'} alt="" />
        <img src={'/emotion2.png'} alt="" />
        <img src={'/emotion3.png'} alt="" />
        <img src={'/emotion4.png'} alt="" />
        <img src={'/emotion5.png'} alt="" />
      </div>
      <div>
        {/* assets 폴더 내 위치하면 빌드 시 최적화 됨.  브라우저 메모리에 캐싱됨. 단 소수의 이미지만 assets에 개수가 많은 경우 public 폴더 사용*/}
        <img src={emotion1} alt="" />
        <img src={emotion2} alt="" />
        <img src={emotion3} alt="" />
        <img src={emotion4} alt="" />
        <img src={emotion5} alt="" />
      </div>
      <div>
        {/* Routes 밖에 배치된 요소들은 모든 페이지에 공통적으로 보여진다.
        공통적으로 보여지는 요소가 아니면 Routes 안에 배치되어야한다. */}
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>
        <button onClick={onClickEvent}>new 페이지를 이벤트로 이동</button>
        <Routes>
          {/* Routes 안에는 Route만 들어갈 수 있음. 새로고침 */}
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          {/* url parameter */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
