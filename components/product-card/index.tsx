import { useRouter } from "next/router";
import { MainButton } from "ui/buttons";
import { Subtitle, LargeText, Title, Text } from "ui/typography";
import { StyledProductCard, StyledProductCardContent } from "ui/card";
import CardMedia from "@mui/material/CardMedia";
import { useCreateOrder } from "hooks";

export function ProductCard({ product, sx }: any) {
  const { data, isLoading, error, setData } = useCreateOrder();

  const handleBuy = () => {
    setData(product.objectID);
  };

  console.log(data.link);
  return (
    <StyledProductCard sx={{ ...sx }}>
      <CardMedia
        component="img"
        height="237"
        image={product.Images[0].url}
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
        <Subtitle>{product.Name}</Subtitle>
        <Title>{"$" + product["Unit cost"]}</Title>
        <MainButton
          color="lightblue"
          callback={handleBuy}
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
        </MainButton>
        <Text sx={{ marginBottom: "30px", marginTop: "20px" }}>
          Description: {product.Description}
        </Text>
      </StyledProductCardContent>
    </StyledProductCard>
  );
}
