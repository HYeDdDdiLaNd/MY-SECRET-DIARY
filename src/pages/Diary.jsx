import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Header from '../components/common/Header';
import Viewer from '../components/Viewer';
import { findData } from '../hooks/useData';
import defaultTodaySet from '../util/get-date-set';

const Diary = () => {
  const params = useParams(); //url parameter : ~/product/1 => /뒤에 아이템의 id를 명시 받아오기
  const nav = useNavigate();

  const diaryData = findData(params.id);
  if (!diaryData) {
    //이렇게 해주는 이유는 findData 찾을 때 초기값이 undefined라 그냥 바로 변수에 할당하면 에러가 남.
    return <div> 로딩중</div>;
  }
  const title = defaultTodaySet(new Date(diaryData.date));

  return (
    <div>
      <Header
        leftChild={<Button text={`< 뒤로가기`} onclick={() => nav(-1)} />}
        rightChild={
          <Button text={`수정하기`} onclick={() => nav(`/edit/${params.id}`)} />
        }
        title={`${title}의 기록`}
      />

      <Viewer {...diaryData} />
    </div>
  );
};

/* **
 1. 스타일 구현하기
 2. 헤더 가져오기   
 3. 클릭한 리스트의 데이터 찾기
 4. 데이터 뿌리기
 */
export default Diary;
