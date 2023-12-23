import { FC, memo } from "react";
import {
  HeaderContainer,
  HeaderIconContainer,
  HeaderLink,
  HeaderView,
} from "./style.ts";
import logo from "../../assets/logo.png";
import { ExitIcon } from "../svg";
import { Empty } from "../Empty";
import { useNavigate } from "react-router-dom";

const Header: FC<{ isPrivate?: boolean }> = ({ isPrivate }) => {
  const navigate = useNavigate();

  return (
    <HeaderView>
      <HeaderContainer>
        <img src={logo} />
        <Empty />
        <HeaderLink>Контакты</HeaderLink>
        <HeaderLink>Помощь</HeaderLink>
        {isPrivate && (
          <HeaderIconContainer
            onClick={() => {
              localStorage.clear();
              navigate("/signIn", { replace: true });
            }}
          >
            <ExitIcon />
          </HeaderIconContainer>
        )}
      </HeaderContainer>
    </HeaderView>
  );
};

export default memo(Header);
