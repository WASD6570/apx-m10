import { Subtitle } from "ui/typography";
import { MainButton, SecondaryButton } from "ui/buttons";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

export const CartPage = () => {
  const router = useRouter();
  const handleContinue = () => {
    router.push("/");
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "space-around",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          marginTop: "15%",
        }}
      >
        <Subtitle sx={{ paddingBottom: "20px" }}>Under development!</Subtitle>
        <MainButton
          sx={{ height: 50 }}
          color="orange"
          callback={handleContinue}
        >
          Take me to a better place
        </MainButton>
      </Box>
    </Container>
  );
};
