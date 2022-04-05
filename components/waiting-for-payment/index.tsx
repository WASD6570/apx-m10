import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { Subtitle } from "ui/typography";
import { useRouter } from "next/router";
import { useUpdateOrderData, useGetOrderData } from "hooks/orders";
import { useEffect } from "react";

export const WaitingComponent = () => {
  const router = useRouter();
  const { data, isLoading, error, setData } = useUpdateOrderData();
  const {
    data: orderData,
    isLoading: orderLoading,
    error: OrderError,
    setData: setId,
  } = useGetOrderData();

  useEffect(() => {
    setData(router.query.q);
    setId(router.query.q);
  }, [router.query.q]);
  // setTimeout(() => {
  //   router.push("/");
  // }, 5000);

  useEffect(() => {
    console.log(orderData);
  }, [orderData]);

  return (
    <Container
      maxWidth="sm"
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
        <Subtitle>
          Thanks for your purchase, we will be sending more infomation to your
          email. Please complete your payment.
        </Subtitle>
      </Box>
    </Container>
  );
};
