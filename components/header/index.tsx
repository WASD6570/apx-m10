import { HeaderModalBurger } from "components/header/header-modal-burger";
import React, { useState, useEffect } from "react";
import { Subtitle, LargeText, Text, TinyText } from "ui/typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import { MainButton, SecondaryButton } from "ui/buttons";
import { ShopCart } from "ui/icons";
import {
  SearchWrapper,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "components/header/styled";
import { useRouter } from "next/router";
import { useGetLocalData, useIsLoggedIn, useLogOut } from "hooks";

type HeaderMobile = {
  searchBar: boolean;
};

export function HeaderMobile({ searchBar }: HeaderMobile) {
  const [searchBarClose, setSearchBarClose] = useState(searchBar);
  const [searchBarCloseMobile, setSearchBarCloseMobile] = useState(searchBar);
  const router = useRouter();
  const [input, setInput] = useState<null | string>(null);
  const token = useGetLocalData("token");
  const email = useGetLocalData("email");
  const isLoggedIn = useIsLoggedIn();
  const logOut = useLogOut();

  const handleSearch = () => {
    if (input) {
      router.push(`/search?q=${input}`);
    }
  };

  function returnHome(): void {
    router.push("/");
  }
  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogOut = () => {
    logOut(true);
  };

  useEffect(() => {
    if (router.pathname === "/") {
      setSearchBarClose(false);
    } else {
      setSearchBarClose(true);
    }
  }, [router.pathname]);
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "black" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "black",
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "black",
            "@media (min-width: 769px)": {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}
        >
          <SecondaryButton sx={{ marginLeft: "-2px" }} onClick={returnHome}>
            <ShopCart color="white" aria-label="open drawer" />
          </SecondaryButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ "@media (min-width: 769px)": { display: "none" } }}>
            <HeaderModalBurger
              color="white"
              openSearchBar={setSearchBarCloseMobile}
            />
          </Box>
          <Box
            sx={{
              "@media (min-width: 769px)": {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },

              display: "none",
            }}
          >
            {searchBarClose && (
              <>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon sx={{ color: "white" }} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    sx={{ width: "280px" }}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Find your favorite products"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <MainButton
                  color="orange"
                  sx={{ width: "150px", marginRight: "calc(50vw - 390px )" }}
                  callback={handleSearch}
                >
                  Search
                </MainButton>
              </>
            )}
            <Box>
              {isLoggedIn && (
                <>
                  <TinyText color="white">{email}</TinyText>
                  <br />
                  <SecondaryButton onClick={handleLogOut} sx={{ margin: 0 }}>
                    <TinyText color="red">Logout</TinyText>
                  </SecondaryButton>
                </>
              )}
              {!isLoggedIn && (
                <MainButton
                  color="pink"
                  sx={{ width: "150px" }}
                  callback={handleLogin}
                >
                  login
                </MainButton>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ "@media (min-width: 769px)": { display: "none" } }}>
        {searchBarCloseMobile && (
          <SearchWrapper>
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "white" }} />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={(e) => setInput(e.target.value)}
                placeholder="Find your favorite products"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <MainButton
              color="orange"
              callback={handleSearch}
              sx={{ marginLeft: "8px" }}
            >
              Search
            </MainButton>
          </SearchWrapper>
        )}
      </Box>
    </Box>
  );
}

export function HeaderDesktop() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
    </Box>
  );
}
