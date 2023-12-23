import { styled } from "@mui/material";

export const PageTitle = styled("div")<{ isActive: boolean }>(
  ({ isActive }) => `
    color: ${isActive ? "#50B848" : "#71716C"};
`
);
