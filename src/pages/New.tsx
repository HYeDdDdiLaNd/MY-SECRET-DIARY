import { useSearchParams } from 'react-router-dom';

const New = () => {
  const [params, setParams] =
    useSearchParams(); /* query string: /new?value=good => ? 뒤에 변수명(value)과 값(=good)을 명시 */
  console.log(params.get('value'));

  return <div>New</div>;
};

export default New;
