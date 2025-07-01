import Header from '../components/common/Header';
import Button from '../components/common/Button';
import DiaryList from '../components/DiaryList';
const Home = () => {
  return (
    <>
      <Header
        title={new Date().toLocaleDateString()}
        leftChild={<Button text={'<'} />}
        rightChild={<Button text={'>'} />}
      ></Header>
      <div className="diary-list">
        <DiaryList />
      </div>
    </>
  );
};

export default Home;

/* 해야 할 일 */
/* **
1. 헤더 이전, 다음 버튼 클릭 시 날짜 받아오기
2. 일기 리스트 스타일 만들기
3. 목업데이터로 다이어리 리스트 그리기
  3-1. 헤더에 노출되고 있는 한 달 동안 기준으로 리스트 필터링 리스트
4. 셀렉트 박스 체인지되면 리스트 필터
  4-1. 기본값: 최신순 3-1.에서 노출되고 있는 리스트 기준으로 필터링
  4-2. 오래된 순이면 4-1을 역순으로 바꿈
5. 리스트 내 이미지, 콘텐츠 영역 클릭 시 일기 상세 페이지로 이동
*/
