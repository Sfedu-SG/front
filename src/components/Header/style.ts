import { styled } from "@mui/material";

export const HeaderView = styled("div")(
  () => `
    width: 100%;
    height: 100px;
    padding: 0 60px;
    box-sizing: border-box;
`
);

export const HeaderContainer = styled("div")(
  () => `
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    border-bottom: 4px solid #EBEAF0;
`
);

export const HeaderLink = styled("div")(
  () => `
    padding: 0 12px;
    color: #000;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal; 
`
);

export const HeaderIconContainer = styled("div")(
  () => `
    height: 40px;
    width: 40px;
    padding-left: 20px;
`
);
