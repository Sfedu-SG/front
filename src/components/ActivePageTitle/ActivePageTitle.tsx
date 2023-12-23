import { PageTitle } from "./style.ts";
import { FC, memo, PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";

const ActivePageTitle: FC<PropsWithChildren<{ route: string }>> = ({
  route,
  children,
}) => {
  const location = useLocation();

  return (
    <PageTitle isActive={location.pathname === route}>{children}</PageTitle>
  );
};

export default memo(ActivePageTitle);
