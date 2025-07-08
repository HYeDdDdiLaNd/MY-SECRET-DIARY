import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Editor.module.scss';
import Button from '../components/common/Button';
import EmotionList from './EmotionList';
import { emotionDateList } from '../util/get-emotion-data';
import defaultTodaySet from '../util/get-date-set';

const Editor = ({ initData, onSubmit }) => {
  const nav = useNavigate();

  const [input, setInput] = useState({
    //일기를 작성할 때의 값 저장되는 곳
    date: defaultTodaySet(new Date()),
    emotionId: null,
    content: '',
  });

  useEffect(() => {
    if (initData) {
      //일기 수정하기인지 || 일기 작성하기인지 구분
      setInput({
        date: defaultTodaySet(new Date(initData.date)),
        emotionId: initData.emotionId,
        content: initData.content,
      });
    }
  }, [initData]);

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
