import { Title, Subtitle } from "ui/typography";
import { Input } from "ui/textfield";
import { MainButton } from "ui/buttons";
import { Card } from "ui/card";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { SearchWrapper } from "ui/styledWrappers";
import { useState } from "react";
import { useRouter } from "next/router";

type MainPageProps = {
  children?: React.ReactNode;
  topProducts: any[];
};

export function MainPage({ topProducts }: MainPageProps) {
  const [input, setinput] = useState<null | string>(null);
  const router = useRouter();
  const handleSearch = () => {
    if (input) router.push(`/search?q=${input}`);
  };

  return (
    <>
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
            The best <br /> e-commerce
          </Title>
          <SearchWrapper style={{ width: "60vw" }}>
            <Input
              onValueChange={setinput}
              type={"text"}
              placeholder="Find your favourite product"
            ></Input>
            <MainButton
              color="blue"
              callback={handleSearch}
              sx={{
                "&& .MuiTouchRipple-child": {
                  backgroundColor: "white",
                },
                marginBotton: "20px",
              }}
            >
              Search
            </MainButton>
          </SearchWrapper>
        </Box>
      </Container>
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: "var(--pink)",
          "@media (min-width: 769px)": {
            backgroundColor: "var(--lightblue)",
          },
        }}
      >
        <Box
          sx={{
            "@media (min-width: 769px)": {
              backgroundColor: "var(--lightblue)",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
            },
          }}
        >
          <Subtitle
            color="white"
            sx={{
              "@media (min-width: 769px)": {
                backgroundColor: "var(--lightblue)",
                color: "black",
                display: "inherit",
                margin: "20px",
              },
              display: "none",
            }}
          >
            Top <br /> Products
          </Subtitle>
          <Box
            sx={{
              "@media (min-width: 769px)": {
                backgroundColor: "var(--lightblue)",
                flexDirection: "row",
              },
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
            <Subtitle
              color="white"
              sx={{
                "@media (min-width: 769px)": {
                  display: "none",
                },
              }}
            >
              Top <br /> Products
            </Subtitle>
            {topProducts.map((item, index) => {
              return (
                <Card
                  key={index}
                  product={item}
                  sx={{ width: "100%", maxWidth: "280px", height: "350px" }}
                ></Card>
              );
            })}
          </Box>
        </Box>
      </Container>
    </>
  );
}
