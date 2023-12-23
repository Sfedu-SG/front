import { FC, useEffect } from "react";
import { LayoutContainer } from "./style.ts";
import { Header } from "../../components";
import { useNavigate } from "react-router-dom";

const PageLayouting = (Component: FC, isPrivate?: boolean) => {
  const returnHook: FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigation = useNavigate();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!localStorage.getItem("token") === isPrivate) {
        navigation(isPrivate ? "/signIn" : "/");
      }
    }, [isPrivate]);

    return (
      <LayoutContainer>
        <Header />
        <Component />
      </LayoutContainer>
    );
  };

  return returnHook;
};

export default PageLayouting;
