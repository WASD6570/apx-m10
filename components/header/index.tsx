import { HeaderModalBurger } from "components/header/header-modal-burger";
import React, { useState, useEffect } from "react";
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

type HeaderMobile = {
  searchBar: boolean;
};

export function HeaderMobile({ searchBar }: HeaderMobile) {
  const [searchBarClose, setSearchBarClose] = useState(searchBar);
  const router = useRouter();
  const [input, setInput] = useState<null | string>(null);

  const handleSearch = () => {
    if (input) {
      router.push(`/search?q=${input}`);
    }
  };

  function returnHome(): void {
    router.push("/");
  }
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "black" }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <SecondaryButton sx={{ marginLeft: "-2px" }} onClick={returnHome}>
            <ShopCart color="white" aria-label="open drawer" />
          </SecondaryButton>
          <Box sx={{ flexGrow: 1 }} />
          <HeaderModalBurger color="white" openSearchBar={setSearchBarClose} />
        </Toolbar>
      </AppBar>
      {searchBarClose && (
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
          <MainButton color="orange" callback={handleSearch}>
            Search
          </MainButton>
        </SearchWrapper>
      )}
    </Box>
  );
}

export function HeaderDesktop() {
  return (
    <div>
      <HeaderModalBurger />
    </div>
  );
}
