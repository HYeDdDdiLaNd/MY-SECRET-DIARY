import Header from '../components/common/Header';
import Button from '../components/common/Button';
import DiaryList from '../components/DiaryList';
import { useState } from 'react';
const Home = () => {
  const today = new Date();
  const [date, setDated] = useState(today);

  const onUpdateIncreaseDate = () => {
    if (
      date.getFullYear() >= today.getFullYear() &&
      date.getMonth() >= today.getMonth()
    )
      return;
    setDated(new Date(date.getFullYear(), date.getMonth() + 1)); //다시 Date 객체로 감싸야함.
  };

  const onUpdateDecreaseDate = () => {
    setDated(new Date(date.getFullYear(), date.getMonth() - 1)); //다시 Date 객체로 감싸야함.
  };

  return (
    <>
      <Header
        title={`${date.getFullYear()}년 ${date.getMonth() + 1}월`}
        leftChild={<Button text={'<'} onclick={onUpdateDecreaseDate} />}
        rightChild={<Button text={'>'} onclick={onUpdateIncreaseDate} />}
      ></Header>
      <div className="diary-list">
        <DiaryList currentSettingDate={date} />
      </div>
    </>
  );
};

export default Home;

/* 해야 할 일 */
/* **
4. 셀렉트 박스 체인지되면 리스트 필터
  4-1. 기본값: 최신순 3-1.에서 노출되고 있는 리스트 기준으로 필터링
  4-2. 오래된 순이면 4-1을 역순으로 바꿈
5. 리스트 내 이미지, 콘텐츠 영역 클릭 시 일기 상세 페이지로 이동
*/
