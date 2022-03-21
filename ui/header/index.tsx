import React from "react";
import { SecondaryButton } from "ui/buttons";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Subtitle, LargeText } from "ui/typography";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export function Header() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <SecondaryButton
        sx={{ color: "black", border: "1px solid transparent" }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        <MenuIcon></MenuIcon>
      </SecondaryButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div style={{ backgroundColor: "black" }}>
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
            >
              <LargeText
                sx={{
                  marginTop: 0,
                  marginBottom: 0,
                  justifySelf: "center",
                }}
              >
                Panel de control
              </LargeText>
            </Toolbar>
          </AppBar>
          <List
            sx={{
              marginTop: 1,
              backgroundColor: "black",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <br></br>
            <Subtitle color="white"> Ingresa</Subtitle>
            <br></br>
            <br></br>
            <Subtitle color="white"> Mi perfil</Subtitle>
            <br></br>
            <br></br>
            <Subtitle color="white"> Buscar</Subtitle>
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
