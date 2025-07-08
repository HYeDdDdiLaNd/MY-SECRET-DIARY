import { useContext, useEffect, useState } from 'react';
import { DiaryStateContext } from '../App';

export const findData = (id) => {
  const [diaryData, setThisDiaryData] = useState();
  const data = useContext(DiaryStateContext);

  useEffect(() => {
    //존재하는 페이지인지 아닌지 마운트되고 나서 체크
    const findThisData = data.find((item) => Number(item.id) === Number(id));
    if (!findThisData) {
      alert('존재하지 않는 페이지 입니다.');
      nav(-1, { replace: true });
    }
    setThisDiaryData(findThisData); //useEffect는 리턴할 수 없으니까 이 값을 useState에 저장
  }, [id]); //파라미터가 바뀔때마다 체크

  return diaryData;
};

//커스텀 훅을 만들면 (파일명은 use로 시작하고 폴더는 hooks) 리액트 훅을 사용할 수 있다.
