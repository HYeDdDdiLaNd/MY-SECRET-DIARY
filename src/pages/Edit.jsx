import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Button from '../components/common/Button';
import Header from '../components/common/Header';
import Editor from '../components/Editor';
import { DiaryDispatchContext } from '../App';
import { findData } from '../hooks/useData';

const Edit = () => {
  const params = useParams(); //url parameter : ~/product/1 => /뒤에 아이템의 id를 명시 받아오기
  const nav = useNavigate();
  const { onUpdateDiary, onDeleteDiary } = useContext(DiaryDispatchContext);

  const diaryData = findData(params.id);
  if (!diaryData) {
    console.log('로딩중....');
  }

  const onClickDeleteCurrrentDiary = () => {
    const answer = window.confirm('정말 삭제하시겠습니까?');
    if (answer) {
      onDeleteDiary(params.id);
      nav(-1, { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm('수정하시겠습니까?')) {
      onUpdateDiary(
        params.id, //여기서 파라미터 아이디를 쓰는 이유는 해당 매개변수로 id 값을 받아오지 않기 때문임.
        new Date(input.date).getTime(),
        input.emotionId,
        input.content
      );
    }
  };
  return (
    <div>
      <Header
        title={'일기 수정하기'}
        leftChild={<Button text={'< 뒤로가기'} onclick={() => nav(-1)} />}
        rightChild={
          <Button
            text={'삭제하기'}
            type="remove"
            onclick={onClickDeleteCurrrentDiary}
          />
        }
      />
      <Editor initData={diaryData} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
