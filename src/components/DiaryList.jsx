import { useNavigate } from 'react-router-dom';
import styles from './DiaryList.module.scss';
import Button from '../components/common/Button';
import DiaryContent from '../components/DiaryContent';

const DiaryList = ({ filteredData }) => {
  const nav = useNavigate();

  const onChangeSorted = (e) => {
    if (e.target.value === 'latest') {
      filteredData = filteredData.toSorted(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    } else if (e.target.value === 'oldest') {
      filteredData = filteredData.toSorted(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    }
  };

  return (
    <div>
      <div className={`${styles.topArea}`}>
        <select onChange={onChangeSorted}>
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
