import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Button from '../components/common/Button';
import Header from '../components/common/Header';
import Editor from '../components/Editor';
import { DiaryStateContext, DiaryDispatchContext } from './../App.jsx';

const Edit = () => {
  const params = useParams(); //url parameter : ~/product/1 => /뒤에 아이템의 id를 명시 받아오기
  const nav = useNavigate();
  const [diaryData, setThisDiaryData] = useState();
  const { onUpdateDiary, onDeleteDiary } = useContext(DiaryDispatchContext);
  const onClickDeleteCurrrentDiary = () => {
    const answer = window.confirm('정말 삭제하시겠습니까?');
    if (answer) {
      onDeleteDiary(params.id);
      nav(-1, { replace: true });
    }
  };

  const data = useContext(DiaryStateContext);

  useEffect(() => {
    //존재하는 페이지인지 아닌지 마운트되고 나서 체크
    const findThisData = data.find(
      (item) => Number(item.id) === Number(params.id)
    );
    if (!findThisData) {
      alert('존재하지 않는 페이지 입니다.');
      nav(-1, { replace: true });
    }
    setThisDiaryData(findThisData); //useEffect는 리턴할 수 없으니까 이 값을 useState에 저장
  }, [params.id]); //파라미터가 바뀔때마다 체크

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
