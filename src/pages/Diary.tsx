import { useParams } from 'react-router-dom';

const Diary = () => {
  const params = useParams(); //url parameter : ~/product/1 => /뒤에 아이템의 id를 명시 받아오기
  console.log(params);
  return (
    <div>
      Diary
      <p>{params.id}번 일기 입니다.</p>
    </div>
  );
};

export default Diary;
