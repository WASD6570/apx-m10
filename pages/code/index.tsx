import { Layuot } from "ui/layout";
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { BoldText, Subtitle, Text, TinyText } from "ui/typography";
import { CodeInput } from "ui/textfield";
import { MainButton, SecondaryButton } from "ui/buttons";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { useCode, useSendCode, useResendEmail, useGetLocalData } from "hooks";

export default function CodePage() {
  const { error, setInput, code } = useCode();
  const router = useRouter();
  const { data, error: fetchError, setCode } = useSendCode();
  const { setEmail, isError, isSuccess, isLoading } = useResendEmail();
  const localData = useGetLocalData("email");

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
      router.push("/");
    }
  }, [data, fetchError]);

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
          <MainButton
            color="orange"
            sx={{ height: 50 }}
            callback={handleSubmit}
          >
            Login
          </MainButton>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              sx={{ textAlign: "center", paddingTop: "20px" }}
              color="black"
            >
              Did not arrived?
            </Text>
            <SecondaryButton sx={{ marginTop: "13px" }} onClick={handleResend}>
              Resend Code
            </SecondaryButton>
          </div>
        </Box>
      </Container>
    </Layuot>
  );
}
