import React from "react";
import { SecondaryButton } from "ui/buttons";
import MenuIcon from "@mui/icons-material/Menu";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Subtitle, LargeText } from "ui/typography";
import { useRouter } from "next/router";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export function HeaderModalBurger({ color, openSearchBar }: any) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearchBar = () => {
    router.push("/search");
    openSearchBar(true);
    setOpen(false);
  };

  const handleLogin = () => {
    router.push("/login");
    setOpen(false);
  };

  return (
    <div>
      <SecondaryButton
        sx={{ color: color, border: "1px solid transparent" }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        <MenuIcon sx={{ fontSize: "52px", marginRight: "-10px" }}></MenuIcon>
      </SecondaryButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div style={{ backgroundColor: "black", height: "100vh" }}>
          <AppBar
            sx={{
              position: "relative",
              color: "white",
              backgroundColor: "black",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                zIndex: 1200,
                marginTop: 1,
                marginLeft: 1,
              }}
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Toolbar>
          </AppBar>
          <List
            sx={{
              marginTop: 1,
              backgroundColor: "black",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <br></br>
            <SecondaryButton onClick={handleLogin}>
              <Subtitle color="white">Login</Subtitle>
            </SecondaryButton>
            <br></br>
            <SecondaryButton onClick={() => {}}>
              <Subtitle color="white">My profile</Subtitle>
            </SecondaryButton>
            <br></br>
            <SecondaryButton onClick={handleSearchBar}>
              <Subtitle color="white">Search</Subtitle>
            </SecondaryButton>
            <br></br>
            <br></br>
            <LargeText color="white">email</LargeText>
            <SecondaryButton>
              <Subtitle color="white">Logout</Subtitle>
            </SecondaryButton>
          </List>
        </div>
      </Dialog>
    </div>
  );
}
