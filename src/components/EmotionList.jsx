import styles from './EmotionList.module.scss';

const EmotionList = ({ id, src, text, isActive, onClick }) => {
  return (
    <li
      className={`${styles.emotionList} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      <div className={`${styles.emotionWrap}`}>
        <img src={src} alt={text} />
        <span>{text}</span>
      </div>
    </li>
  );
};

/*  */

export default EmotionList;
