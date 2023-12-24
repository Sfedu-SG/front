import { styled } from "@mui/material";

export const ProfileItemContainer = styled("div")(
  () => `
    height: 13vh;
    width: 46vw;
    background-color: #F1F3F9D9;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px 24px;
`
);

export const Other = styled("div")(
  () => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 12px;
    padding-left: 24px;
`
);

export const UserData = styled("div")(
  () => `
    display: flex;
    flex-direction: column;
`
);

export const Username = styled("span")(
  () => `
    font-family: 'Montserrat';
    font-size: 28px;
    font-weight: 500;
    line-height: 33px;
    letter-spacing: 0em;
    color: #000000;
`
);

export const Birthday = styled("span")(
  () => `
    font-family: 'Montserrat';
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #71716C;
`
);

export const IconContainer = styled("div")(
  () => `
    height: 40px;
    width: 40px;
`
);

export const ChangeDate = styled("span")(
  () => `
    font-family: 'Montserrat';
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #71716C;
    display: flex;
    justify-content: flex-end;
`
);
