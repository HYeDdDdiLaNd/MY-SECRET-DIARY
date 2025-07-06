import { useParams } from 'react-router-dom';
import Editor from '../components/Editor';

const Edit = () => {
  const params = useParams(); //url parameter : ~/product/1 => /뒤에 아이템의 id를 명시 받아오기
  return (
    <div>
      Edit
      <p>{params.id}번 일기 수정페이지 입니다.</p>
    </div>
  );
};

export default Edit;
