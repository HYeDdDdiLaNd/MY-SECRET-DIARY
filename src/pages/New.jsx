import { useNavigate, useSearchParams } from 'react-router-dom';
import { useContext } from 'react';
import Header from '../components/common/Header';
import Button from '../components/common/Button';
import Editor from '../components/Editor';
import { DiaryDispatchContext } from './../App.jsx';

const New = () => {
  // const [params] = useSearchParams(
  //   {}
  // ); /* query string: /new?value=good => ? 뒤에 변수명(value)과 값(=good)을 명시 */
  // console.log(params.get('value'));

  const nav = useNavigate();
  const { onCreatedDiary } = useContext(DiaryDispatchContext);

  const onSubmit = (input) => {
    onCreatedDiary(input.date, input.emotionId, input.content);
  };
  return (
    <div>
      <Header
        title={'새 일기 쓰기'}
        leftChild={<Button text={'< 뒤로 가기'} onclick={() => nav(-1)} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;

/* **
   1. 스타일 만들기
   2. 이모션 버튼 활성화 만들기 
   3. 데이터 피커
    3-1. 디폴트: 오늘 날짜
    3-2. 선택 시: 선택한 날짜 세팅
   4. 작성 완료 클릭 시 data에 id, date, emotion, content 추가
     4-1. 기존에 만들었던 함수 연동
*/
