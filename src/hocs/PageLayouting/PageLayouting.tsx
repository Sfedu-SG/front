import { FC, memo, useEffect } from "react";
import { LayoutContainer } from "./style.ts";
import { Header } from "../../components";
import { useNavigate } from "react-router-dom";

const PageLayouting = (Component: FC, isPrivate?: boolean) => {
  const returnHook = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigation = useNavigate();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!localStorage.getItem("access_token") !== !isPrivate) {
        navigation(isPrivate ? "/signIn" : "/");
      }
    }, [isPrivate]);

    return (
      <LayoutContainer>
        <Header isPrivate={isPrivate} />
        <Component />
      </LayoutContainer>
    );
  };

  return memo(returnHook);
};

export default PageLayouting;
