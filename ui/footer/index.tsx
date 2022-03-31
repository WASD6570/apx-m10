import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { TwitterIcon, InstagramIcon, APXIcon } from "ui/icons";
import { BoldText, Title, Subtitle, Text } from "ui/typography";
import { OptionsWrapper, MediaWrapper, APXWrapper } from "ui/footer/styled";
import { SecondaryButton } from "ui/buttons";
import { useRouter } from "next/router";
import { useIsLoggedIn, useLogOut } from "hooks";

function Footer() {
  const router = useRouter();
  const isLogged = useIsLoggedIn();
  const logOut = useLogOut();
  const handleLogin = () => router.push("/login");
  const handleSearch = () => router.push("/search");
  const handleMyProfile = () => {
    isLogged ? router.push("/profile") : router.push("/login");
  };

  const handleLogOut = () => {
    logOut(true);
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ backgroundColor: "black", marginTop: "auto" }}
      >
        <Box
          sx={{
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            textAlign: "left",
            alignItems: "flex-start",
            backgroudColor: "black",
          }}
        >
          <OptionsWrapper>
            {isLogged ? null : (
              <>
                <SecondaryButton onClick={handleLogin}>
                  {/* No preguntar porque los otros no tienen marginLeft, this is !important */}
                  <Text color="white" sx={{ marginLeft: "-8px" }}>
                    Login
                  </Text>
                </SecondaryButton>
                <br />
              </>
            )}
            <SecondaryButton onClick={handleMyProfile}>
              <Text color="white">My profile</Text>
            </SecondaryButton>
            <br />
            <SecondaryButton onClick={handleSearch}>
              <Text color="white">Search</Text>
            </SecondaryButton>
            <br />
            {!isLogged ? null : (
              <>
                <SecondaryButton onClick={handleLogOut}>
                  <Text color="white">Logout</Text>
                </SecondaryButton>
              </>
            )}
          </OptionsWrapper>
          <MediaWrapper>
            <BoldText color="white">Redes</BoldText>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <TwitterIcon />
              <Text color="white" sx={{ marginLeft: "5px" }}>
                My e-commerce
              </Text>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <InstagramIcon />
              <Text color="white" sx={{ marginLeft: "5px" }}>
                My e-commerce
              </Text>
            </div>
          </MediaWrapper>
          <APXWrapper>
            <APXIcon />
          </APXWrapper>
        </Box>
      </Container>
    </>
  );
}

export { Footer };
