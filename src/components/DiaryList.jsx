import { useNavigate } from 'react-router-dom';
import styles from './DiaryList.module.scss';
import Button from '../components/common/Button';
import DiaryContent from '../components/DiaryContent';
import { useContext } from 'react';
import { DiaryStateContext } from './../App.jsx';

const DiaryList = ({ currentSettingDate }) => {
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);

  const filteringDateList = () => {
    const startDate = new Date(
      currentSettingDate.getFullYear(),
      currentSettingDate.getMonth(),
      1
    ).getTime();
    const endDate = new Date(
      currentSettingDate.getFullYear(),
      currentSettingDate.getMonth() + 1,
      0
    ).getTime();

    return data.filter((item) => {
      if (startDate <= item.date && item.date <= endDate) return item;
    }); //범위에 있는거 가져오기
  };
  const filteredData = filteringDateList();

  // const onChangeSorted = (e) => {
  //   if (e.target.value === 'latest') {
  //     filteredData.sort((a, b) => {
  //       if (a.date - b.date) return a;
  //     });
  //   } else if (e.target.value === 'oldest') {
  //     filteredData.sort((a, b) => {
  //       if (b.date - a.date) return b;
  //     });
  //   }
  // };

  // onChangeSorted();
  // console.log(filteredData);
  return (
    <div>
      <div className={`${styles.topArea}`}>
        <select>
          <option value={'latest'}>최신순</option>
          <option value={'oldest'}>오래된 순</option>
        </select>
        <Button
          className={`${styles.write}`}
          text={'새 일기 쓰기'}
          type="update"
          onclick={() => nav('/new')}
        ></Button>
      </div>
      <div className="DiaryList">
        <DiaryContent data={filteredData}></DiaryContent>
      </div>
    </div>
  );
};

export default DiaryList;
