import { PageLayouting } from "../../hocs";
import { memo } from "react";

const MainPage = () => {
  return (
    <div>
      <div>Hello user 12943710-3198</div>
    </div>
  );
};

export default PageLayouting(memo(MainPage), true);
