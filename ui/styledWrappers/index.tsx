import { styled } from "@mui/material/styles";

export const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "inherit",

  "& > button": {
    marginTop: theme.spacing(2),
  },
}));
