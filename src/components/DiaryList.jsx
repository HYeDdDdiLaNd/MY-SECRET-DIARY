import { useNavigate } from 'react-router-dom';
import styles from './DiaryList.module.scss';
import Button from '../components/common/Button';
import DiaryContent from '../components/DiaryContent';
import { useState } from 'react';

const DiaryList = ({ filteredData }) => {
  const nav = useNavigate();
  const [sort, setSort] = useState('latest');

  const onChangeSort = (e) => {
    setSort(e.target.value);
  };

  const getSortedData = () => {
    return filteredData.toSorted((a, b) => {
      if (sort === 'oldest') return a.date - b.date;
      else return b.date - a.date;
    });
  };

  const sortedData = getSortedData();

  return (
    <div>
      <div className={`${styles.topArea}`}>
        <select onChange={onChangeSort} value={sort}>
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
        <DiaryContent data={sortedData}></DiaryContent>
      </div>
    </div>
  );
};

export default DiaryList;
