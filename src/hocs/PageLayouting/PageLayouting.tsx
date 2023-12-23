import { FC } from "react";
import { LayoutContainer } from "./style.ts";
import { Header } from "../../components";

const PageLayouting = (Component: FC) => () => {
  return (
    <LayoutContainer>
      <Header />
      <Component />
    </LayoutContainer>
  );
};

export default PageLayouting;
