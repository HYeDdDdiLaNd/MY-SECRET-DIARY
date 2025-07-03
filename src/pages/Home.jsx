import Header from '../components/common/Header';
import Button from '../components/common/Button';
import DiaryList from '../components/DiaryList';
import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { DiaryStateContext } from './../App.jsx';

const Home = () => {
  const today = new Date();
  const [date, setDated] = useState(today);
  const diaryData = useContext(DiaryStateContext);

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

  const filteringDateList = () => {
    const startDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      1,
      0,
      0,
      0
    ).getTime();
    const endDate = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0,
      23,
      59,
      59
    ).getTime();

    return diaryData.filter((item) => {
      if (startDate <= item.date && item.date <= endDate) return item;
    }); //범위에 있는거 가져오기
  };
  let filteredData = filteringDateList();

  return (
    <>
      <Header
        title={`${date.getFullYear()}년 ${date.getMonth() + 1}월`}
        leftChild={<Button text={'<'} onclick={onUpdateDecreaseDate} />}
        rightChild={<Button text={'>'} onclick={onUpdateIncreaseDate} />}
      ></Header>
      <div className="diary-list">
        <DiaryList filteredData={filteredData} />
      </div>
    </>
  );
};

export default Home;
