import type { NextPage } from "next";
import { BoldText, Title, Subtitle, Text } from "ui/typography";
import { Layuot } from "ui/layout";
import { Input } from "ui/textfield";
import { MainButton } from "ui/buttons";
import { Card } from "ui/card";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { SearchWrapper } from "ui/styledWrappers";

const Home: NextPage = () => {
  const test = [Card, Card, Card];
  return (
    <>
      <Layuot>
        <Container maxWidth="sm">
          <Box
            sx={{
              height: "40vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Title>
              El mejor <br /> e-commerce
            </Title>
            <SearchWrapper style={{ width: "60vw" }}>
              <Input
                type={"text"}
                placeholder="Find your favourite product"
              ></Input>
              <MainButton
                color="blue"
                sx={{
                  "&& .MuiTouchRipple-child": {
                    backgroundColor: "white",
                  },
                }}
              >
                Search
              </MainButton>
            </SearchWrapper>
          </Box>
        </Container>
        <Container maxWidth={false} sx={{ backgroundColor: "var(--pink)" }}>
          <Box
            sx={{
              backgroundColor: "var(--pink)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              "&& > *": {
                margin: "20px",
              },
            }}
          >
            <Subtitle color="white">
              Productos <br /> destacados
            </Subtitle>
            {test.map((item, index) => {
              return <Card key={index} sx={{ width: "100%" }}></Card>;
            })}
          </Box>
        </Container>
      </Layuot>
    </>
  );
};

export default Home;
