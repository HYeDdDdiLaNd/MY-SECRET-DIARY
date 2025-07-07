import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Editor.module.scss';
import Button from '../components/common/Button';
import EmotionList from './EmotionList';
import getEmotionImage from '../util/get-emotion-image';

const emotionDateList = [
  {
    id: 1,
    src: getEmotionImage(1),
    text: '아주 좋아',
  },
  { id: 2, src: getEmotionImage(2), text: '좋아' },
  { id: 3, src: getEmotionImage(3), text: '보통이야' },
  {
    id: 4,
    src: getEmotionImage(4),
    text: '그저 그래',
  },
  { id: 5, src: getEmotionImage(5), text: '최악이야' },
];

const Editor = ({ onSubmit }) => {
  const nav = useNavigate();

  const defaultTodaySet = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const date = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${date}`;
  };

  const [input, setInput] = useState({
    date: defaultTodaySet(),
    emotionId: null,
    content: '',
  });

  const setInputValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onSubmitClickBtn = () => {
    onSubmit(input);
    nav(-1, { replace: true });
  };

  return (
    <div className={`${styles.editor}`}>
      <section className={`${styles.editDate}`}>
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          name="date"
          value={input.date}
          onChange={setInputValue}
        />
      </section>
      <section className={`${styles.editEmotion}`}>
        <h4>오늘의 감정</h4>
        <ul>
          {emotionDateList.map((item) => (
            <EmotionList
              key={item.id}
              {...item}
              onClick={() =>
                /* 자식 컴포넌트에 이벤트를 발생시키면 해당 컴포넌트 내에서도 props로 이벤트를 받아야 이벤트 처리가 된다. */
                setInputValue({
                  target: {
                    name: 'emotionId',
                    value: item.id,
                  },
                })
              }
              isActive={item.id === input.emotionId}
            />
          ))}
        </ul>
      </section>
      <section className={`${styles.editDiary}`}>
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={setInputValue}
        ></textarea>
      </section>
      <section className={`${styles.btnArea}`}>
        <Button text={'취소하기'} onclick={() => nav(-1)} />
        <Button text={'작성완료'} type={'update'} onclick={onSubmitClickBtn} />
      </section>
    </div>
  );
};

export default Editor;
