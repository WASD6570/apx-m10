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
import { Subtitle, LargeText, LargeTextBold } from "ui/typography";
import { useRouter } from "next/router";
import { useIsLoggedIn, useGetLocalData, useLogOut } from "hooks";

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
  const isLoggedIn = useIsLoggedIn();
  const email = useGetLocalData("email");
  const logOut = useLogOut();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearchBar = () => {
    router.push("/");
    setOpen(false);
  };

  const handleLogin = () => {
    router.push("/login");
    setOpen(false);
  };

  const handleCart = () => {
    router.push("/cart");
    setOpen(false);
  };

  const handleMyProfile = () => {
    router.push("/profile");
    setOpen(false);
  };

  const handleLogOut = () => {
    setOpen(false);
    logOut(true);
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
            {!isLoggedIn && (
              <SecondaryButton onClick={handleLogin}>
                <Subtitle color="white">Login</Subtitle>
              </SecondaryButton>
            )}
            {isLoggedIn && (
              <SecondaryButton onClick={handleCart}>
                <Subtitle color="white">Cart</Subtitle>
              </SecondaryButton>
            )}
            <br></br>
            <SecondaryButton
              onClick={() => {
                isLoggedIn ? handleMyProfile() : handleLogin();
              }}
            >
              <Subtitle color="white">My profile</Subtitle>
            </SecondaryButton>
            <br></br>
            <SecondaryButton onClick={handleSearchBar}>
              <Subtitle color="white">Search</Subtitle>
            </SecondaryButton>
            <br></br>
            <br></br>
            {isLoggedIn && <LargeText color="white">{email}</LargeText>}
            {!isLoggedIn && (
              <LargeText color="white">Please login {":)"}</LargeText>
            )}
            {isLoggedIn && (
              <SecondaryButton onClick={handleLogOut}>
                <Subtitle color="white">Logout</Subtitle>
              </SecondaryButton>
            )}
            {!isLoggedIn && (
              <SecondaryButton onClick={handleLogin}>
                <LargeTextBold color="white">
                  Get your dream product now!
                </LargeTextBold>
              </SecondaryButton>
            )}
          </List>
        </div>
      </Dialog>
    </div>
  );
}
