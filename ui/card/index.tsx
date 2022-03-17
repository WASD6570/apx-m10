import styled from "@emotion/styled";
import MaterialCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Subtitle, LargeText } from "ui/typography";

const StyledCard = styled(MaterialCard)`
  border: 4px solid #000;
`;
const StyledCardContent = styled(CardContent)`
  background-color: var(--pink);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export function Card() {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="237"
        image="https://picsum.photos/200/300"
        alt="green iguana"
      />
      <StyledCardContent>
        <LargeText>Mock product</LargeText>
        <Subtitle>$456</Subtitle>
      </StyledCardContent>
    </StyledCard>
  );
}
