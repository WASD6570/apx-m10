import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  TwitterIcon,
  InstagramIcon,
  APXIcon,
  LinkedInIcon,
  GitHubIcon,
} from "ui/icons";
import { BoldText, Title, Subtitle, Text } from "ui/typography";
import {
  OptionsWrapper,
  MediaWrapper,
  APXWrapper,
} from "components/footer/styled";
import { SecondaryButton } from "ui/buttons";
import { useRouter } from "next/router";
import { useIsLoggedIn, useLogOut } from "hooks";

function Footer() {
  const router = useRouter();
  const isLogged = useIsLoggedIn();
  const logOut = useLogOut();
  const handleLogin = () => router.push("/login");
  const handleSearch = () => router.push("/");
  const handleMyProfile = () => {
    isLogged ? router.push("/profile") : router.push("/login");
  };

  const handleLogOut = () => {
    logOut(true);
  };

  return (
    <>
      <Container
        maxWidth={false}
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
            <BoldText color="white">Contact me!</BoldText>
            <SecondaryButton
              onClick={() =>
                window?.open("https://www.linkedin.com/in/eduardo-n-sanchez/")
              }
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "-3px",
                }}
              >
                <LinkedInIcon />
                <Text
                  color="white"
                  sx={{ marginLeft: "5px", marginTop: "5px" }}
                >
                  Linkedin
                </Text>
              </div>
            </SecondaryButton>
            <br />
            <SecondaryButton
              onClick={() =>
                window?.open("https://github.com/WASD6570/apx-m10")
              }
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "-1px",
                }}
              >
                <GitHubIcon />
                <Text
                  color="white"
                  sx={{ marginLeft: "5px", marginTop: "1px" }}
                >
                  GitHub
                </Text>
              </div>
            </SecondaryButton>
            <br />
            <SecondaryButton>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <InstagramIcon />
                <Text color="white" sx={{ marginLeft: "5px" }}>
                  My e-commerce
                </Text>
              </div>
            </SecondaryButton>
          </MediaWrapper>
          <APXWrapper>
            <SecondaryButton
              sx={{ marginLeft: "-10px" }}
              onClick={() => window?.open("https://apx.school/")}
            >
              <APXIcon />
            </SecondaryButton>
          </APXWrapper>
        </Box>
      </Container>
    </>
  );
}

export { Footer };
