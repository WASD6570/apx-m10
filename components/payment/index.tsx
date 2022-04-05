import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Subtitle } from "ui/typography";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MainButton } from "ui/buttons";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export const PaymentComp = () => {
  const router = useRouter();
  const [status, setStatus] = useState<any>(null);

  useEffect(() => {
    setStatus(router.query.status);
    console.log(router.query.status);
  }, [router.query]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "space-arround",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          margin: "20px 0px",
        }}
      >
        <Subtitle>Payment Status: </Subtitle>
        {status === "approved" && (
          <Stack sx={{ width: "100%", marginTop: "20px" }} spacing={2}>
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              The payment was successful — <strong>thank you!</strong>
            </Alert>
          </Stack>
        )}
        {status === "rejected" && (
          <Stack sx={{ width: "100%", marginTop: "20px" }} spacing={2}>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              The payment was rejected — <strong>try again!</strong>
            </Alert>
          </Stack>
        )}
        {status === "in_process" && (
          <Stack sx={{ width: "100%", marginTop: "20px" }} spacing={2}>
            <Alert severity="warning">
              <AlertTitle>Pending</AlertTitle>
              The payment is pending — <strong>be patient!</strong>
            </Alert>
          </Stack>
        )}
        <br />
        <MainButton
          color="orange"
          sx={{ height: "56px" }}
          callback={() => {
            router.push("/");
          }}
        >
          Go home
        </MainButton>
      </Box>
    </Container>
  );
};
