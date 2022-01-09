import { useLocation, useHistory } from "react-router-dom";
const history = useHistory();
const onClickBack = () => history.goBack();

export const Page1DetailA = () => {
  const { state: location } = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Page1DetailAです。</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
