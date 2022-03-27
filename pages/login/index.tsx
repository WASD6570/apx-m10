import type { NextPage } from "next";
import { Subtitle } from "ui/typography";
import { Layuot } from "ui/layout";
import { Input } from "ui/textfield";
import { MainButton } from "ui/buttons";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { useEmail, useLogin } from "hooks";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const { correct, error, setValue } = useEmail();
  const { data, error: loginError, setEmail } = useLogin();
  const router = useRouter();

  const handleSubmit = () => {
    if (!error && correct.length) {
      setEmail(correct as any);
      router.push("/code");
    }
  };

  return (
    <Layuot>
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
          <Subtitle sx={{ paddingBottom: "20px" }}>Login</Subtitle>
          <br />
          <Input
            type="email"
            label="Email"
            variant="outlined"
            name="email"
            id="email"
            onValueChange={setValue}
            error={error}
          ></Input>
          <br />
          <MainButton
            color="orange"
            sx={{ height: 50 }}
            callback={handleSubmit}
          >
            Continue
          </MainButton>
        </Box>
      </Container>
    </Layuot>
  );
};

export default Login;
