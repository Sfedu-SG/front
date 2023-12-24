import { styled } from "@mui/material";

export const ContentContainer = styled("div")<{ maxWidth?: number }>(
  ({ maxWidth }) => `
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: ${maxWidth || 600}px;
    margin: 0 auto;
    padding: 120px 40px;
`
);
