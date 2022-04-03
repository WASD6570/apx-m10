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
            El mejor <br /> e-commerce
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
          {topProducts.map((item, index) => {
            return (
              <Card key={index} product={item} sx={{ width: "100%" }}></Card>
            );
          })}
        </Box>
      </Container>
    </>
  );
}
