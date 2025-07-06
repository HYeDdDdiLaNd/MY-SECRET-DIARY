import styles from './EmotionList.module.scss';

const EmotionList = ({ id, src, text, onclick, isActive }) => {
  return (
    <li
      className={`${styles.emotionList} ${isActive ? styles.active : ''}`}
      id={id}
      onClick={() => {
        onclick(id);
      }}
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
