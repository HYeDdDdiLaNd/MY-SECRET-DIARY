import { useNavigate } from 'react-router-dom';
import styles from './DiaryContent.module.scss';
import Button from '../components/common/Button';
import getEmotionImage from '../util/get-emotion-image';
const DiaryContent = () => {
  const nav = useNavigate();
  const id = 2;
  return (
    <ul>
      <li>
        <div className="img-area">
          <img src={getEmotionImage(1)} alt="" />
        </div>
        <div className="content-area">
          <span className="created-date"></span>
          <span className="content"></span>
        </div>
        <div className="btn-area">
          <Button text={'수정하기'} onclick={() => nav(`/edit/${id}`)} />
        </div>
      </li>
    </ul>
  );
};

export default DiaryContent;
