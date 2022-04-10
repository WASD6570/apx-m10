import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MainButton, LoaderButton } from "ui/buttons";
import { Subtitle, LargeText, Title, Text } from "ui/typography";
import { StyledProductCard, StyledProductCardContent } from "ui/card";
import CardMedia from "@mui/material/CardMedia";
import { useCreateOrder } from "hooks/orders";
import { useIsLoggedIn } from "hooks";

export function ProductCard({ product, sx }: any) {
  const { data, isLoading, error, setData } = useCreateOrder();
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const router = useRouter();
  const isLoggedIn = useIsLoggedIn();
  console.log(isLoggedIn);
  const handleBuy = () => {
    if (isLoggedIn) {
      setData(product.objectID);
      setButtonLoading(true);
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    if (data) {
      window.open(data.link);
      router.push(`/waiting?q=${data.orderId}`);
    }
  }, [data]);
  return (
    <StyledProductCard sx={{ ...sx }}>
      <CardMedia
        component="img"
        height="237"
        image={product?.Images[0]?.url}
        alt="green iguana"
      />
      <StyledProductCardContent
        sx={{
          padding: 0,
          "& > *": {
            margin: "10px 0px",
          },
        }}
      >
        <Subtitle>{product?.Name}</Subtitle>
        <Title>{"$" + product["Unit cost"]}</Title>
        <LoaderButton
          color="lightblue"
          callback={handleBuy}
          isLoading={buttonLoading}
          disabled={buttonLoading}
          sx={{
            height: "63px",
            "& > *": {
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "39px",
            },
          }}
        >
          Buy Now
        </LoaderButton>
        <Text sx={{ marginBottom: "30px", marginTop: "20px" }}>
          Description: {product.Description}
        </Text>
      </StyledProductCardContent>
    </StyledProductCard>
  );
}
