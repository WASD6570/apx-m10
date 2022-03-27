import { styled } from "@mui/material/styles";

export const OptionsWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "inherit",
  padding: theme.spacing(0.5),
}));

export const MediaWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "inherit",
  paddingLeft: theme.spacing(2),
  "& > *": {
    marginBottom: theme.spacing(1),
  },
}));

export const APXWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "inherit",
  paddingLeft: theme.spacing(2),
}));
