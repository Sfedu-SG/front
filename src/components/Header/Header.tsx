import { memo } from "react";
import {
  HeaderContainer,
  HeaderIconContainer,
  HeaderLink,
  HeaderView,
} from "./style.ts";
import logo from "../../assets/logo.png";
import { ExitIcon } from "../svg";
import { Empty } from "../Empty";

const Header = () => {
  return (
    <HeaderView>
      <HeaderContainer>
        <img src={logo} />
        <Empty />
        <HeaderLink>Контакты</HeaderLink>
        <HeaderLink>Помощь</HeaderLink>
        <HeaderIconContainer>
          <ExitIcon />
        </HeaderIconContainer>
      </HeaderContainer>
    </HeaderView>
  );
};

export default memo(Header);
