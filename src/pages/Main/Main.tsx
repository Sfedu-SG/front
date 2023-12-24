import { PageLayouting } from "../../hocs";
import { memo } from "react";
import { UploadForm } from '../../components/UploadForm';

const MainPage = () => {
  return (
    <div>
      <div>Hello user 12943710-3198</div>
      <UploadForm isLoaded={true} />
    </div>
  );
};

export default PageLayouting(memo(MainPage));
