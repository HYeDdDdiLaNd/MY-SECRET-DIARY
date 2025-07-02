import { useNavigate } from 'react-router-dom';
import styles from './DiaryContent.module.scss';
import Button from '../components/common/Button';
import getEmotionImage from '../util/get-emotion-image';
const DiaryContent = ({ data }) => {
  const nav = useNavigate();
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <div
            className={`${styles.imgArea} ${styles[`emotion_${item.emotionId}`]}`}
            onClick={() => nav(`/Diary/${item.id}`)}
          >
            <img src={getEmotionImage(item.emotionId)} alt="" />
          </div>
          <div
            className={`${styles.contentArea}`}
            onClick={() => nav(`/Diary/${item.id}`)}
          >
            <span
              className={`${styles.createdDate}`}
            >{`${new Date(item.date).toLocaleDateString()}`}</span>
            <span className={`${styles.content}`}>{item.content}</span>
          </div>
          <div className={`${styles.btnArea}`}>
            <Button text={'수정하기'} onclick={() => nav(`/edit/${item.id}`)} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DiaryContent;
