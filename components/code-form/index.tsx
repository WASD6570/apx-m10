import { useEffect, useState } from "react";
import { Subtitle, Text } from "ui/typography";
import { CodeInput } from "ui/textfield";
import { MainButton, SecondaryButton, LoaderButton } from "ui/buttons";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import {
  useCode,
  useSendCode,
  useResendEmail,
  useGetLocalData,
  useProfileSetUp,
} from "hooks";

export const CodePage = () => {
  const { error, setInput, code } = useCode();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data, error: fetchError, setCode } = useSendCode();
  const { setEmail, isError, isSuccess, isLoading } = useResendEmail();
  const localData = useGetLocalData("email");
  const { setSend, setToken } = useProfileSetUp();
  const handleSubmit = () => {
    if (code && !error) {
      setCode(code);
    }
  };

  const handleResend = () => {
    if (localData) {
      setEmail(localData);
    }
  };

  useEffect(() => {
    if (data) {
      setLoading(true);
      setToken(data.token);
      setSend(true);
    }
    if (fetchError) {
      window.alert("wrong code");
      router.reload();
    }
  }, [data, fetchError]);

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
        <Subtitle sx={{ paddingBottom: "20px" }}>Code</Subtitle>
        <br />
        <CodeInput
          type="tel"
          label="code"
          variant="outlined"
          name="code"
          id="code"
          placeholder="Enter code"
          onValueChange={setInput}
          error={error}
          inputProps={{ maxLength: 5 }}
        ></CodeInput>
        <br />
        <LoaderButton
          color="orange"
          sx={{ height: 50 }}
          callback={handleSubmit}
          isLoading={loading}
          disabled={loading}
        >
          Login
        </LoaderButton>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text sx={{ textAlign: "center", paddingTop: "20px" }} color="black">
            Did not arrived?
          </Text>
          <SecondaryButton sx={{ marginTop: "13px" }} onClick={handleResend}>
            Resend Code
          </SecondaryButton>
        </div>
      </Box>
    </Container>
  );
};
