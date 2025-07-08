import styles from './Viewer.module.scss';
import { emotionDateList } from '../util/get-emotion-data';

const Viewer = ({ date, content, emotionId }) => {
  const findEmotionId = emotionDateList.find((item) => item.id === emotionId);
  return (
    <div className={`${styles.viewer}`}>
      <section className={`${styles.emotionArea}`}>
        <h4>오늘의 감정</h4>
        <div className={`${styles.imgWrap} ${styles[`imgWrap_${emotionId}`]}`}>
          <img src={findEmotionId.src} alt="감정 이미지" />
          <p className={`${styles.emotionTIt}`}>{findEmotionId.text}</p>
        </div>
      </section>
      <section className={`${styles.contentArea}`}>
        <h4>오늘의 일기</h4>
        <p className={`${styles.diaryContent}`}>{content}</p>
      </section>
    </div>
  );
};

export default Viewer;
