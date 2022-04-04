import { Subtitle } from "ui/typography";
import { Input } from "ui/textfield";
import { MainButton } from "ui/buttons";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { useEmail, useSendEmail } from "hooks";

export const ProfileForm = () => {
  const router = useRouter();

  const handleSubmit = () => {};

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
          marginBottom: "20px",
        }}
      >
        <Subtitle sx={{ paddingBottom: "20px" }}>Login</Subtitle>
        <br />
        <Input
          type="email"
          label="Email"
          variant="outlined"
          name="email"
          id="email"
          //onValueChange={setValue}
          //error={error}
        ></Input>
        <br />
        <MainButton color="orange" sx={{ height: 50 }} callback={handleSubmit}>
          Continue
        </MainButton>
      </Box>
    </Container>
  );
};
