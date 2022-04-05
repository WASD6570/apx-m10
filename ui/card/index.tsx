import styled from "@emotion/styled";
import MaterialCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Subtitle, LargeText, Title, Text } from "ui/typography";
import { useRouter } from "next/router";
import { MainButton } from "ui/buttons";

const StyledCard = styled(MaterialCard)`
  border: 4px solid #000;
`;
const StyledCardContent = styled(CardContent)`
  background-color: var(--pink);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export function Card({ sx, product }: any) {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: `/product/${product.objectID}`,
      query: { data: JSON.stringify(product) },
    });
  };
  return (
    <StyledCard sx={{ ...sx }} onClick={handleClick}>
      <CardMedia
        component="img"
        height="237"
        image={product.Images[0].url}
        alt="green iguana"
      />
      <StyledCardContent sx={{ height: "100%" }}>
        <LargeText>{product.Name}</LargeText>
        <Subtitle>{"$" + product["Unit cost"]}</Subtitle>
      </StyledCardContent>
    </StyledCard>
  );
}

export const StyledProductCard = styled(MaterialCard)`
  border: none;
  box-shadow: none;
`;

export const StyledProductCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
