import { PageLayouting } from "../../hocs";
import { memo } from "react";
import { ContentContainer } from "../../components";
import ProfileItemChangeable from "../../components/ProfileItemChangeable/ProfileItemChangeable.tsx";

const MainPage = () => {
  return (
    <ContentContainer maxWidth={800}>
      <div>Hello user 12943710-3198</div>
      <ProfileItemChangeable
        user={"Vlad Vlad"}
        id={"12"}
        birthday={"20.20.2000"}
        changeDate={"19.19.2019"}
      />
    </ContentContainer>
  );
};

export default PageLayouting(memo(MainPage), true);
