import { useNavigate } from 'react-router-dom';
import styles from './DiaryList.module.scss';
import Button from '../components/common/Button';
import DiaryContent from '../components/DiaryContent';
const DiaryList = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className="top-area">
        <select>
          <option value={'latest'}>최신순</option>
          <option value={'oldest'}>오래된 순</option>
        </select>
        <Button text={'새 일기 쓰기'} onclick={() => nav('/new')}></Button>
      </div>
      <div className="DiaryList">
        <DiaryContent></DiaryContent>
      </div>
    </div>
  );
};

export default DiaryList;
