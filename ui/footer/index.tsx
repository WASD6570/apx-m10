import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { TwitterIcon, InstagramIcon, APXIcon } from "ui/icons";
import { BoldText, Title, Subtitle, Text } from "ui/typography";
import { OptionsWrapper, MediaWrapper, APXWrapper } from "ui/footer/styled";
import { SecondaryButton } from "ui/buttons";
import { useState } from "react";

function Footer({ isLogged }: any) {
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
                <SecondaryButton>
                  {/* No preguntar porque los otros no tienen marginLeft !important */}
                  <Text color="white" sx={{ marginLeft: "-8px" }}>
                    Login
                  </Text>
                </SecondaryButton>
                <br />
              </>
            )}
            <SecondaryButton>
              <Text color="white">My profile</Text>
            </SecondaryButton>
            <br />
            <SecondaryButton>
              <Text color="white">Search</Text>
            </SecondaryButton>
            <br />
            {!isLogged ? null : (
              <>
                <SecondaryButton>
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
