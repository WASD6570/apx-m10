import type { NextPage } from "next";
import { BoldText, Title, Subtitle, Text } from "ui/typography";
import { MainButton } from "ui/buttons";
import { TextField } from "ui/textfield";
import { Card } from "ui/card";
import { ShopCart } from "ui/icons";
import { Header } from "ui/header";
const Home: NextPage = () => {
  return (
    <>
      <Header></Header>
      <Title>Titulo</Title>
      <Subtitle>Subtitulo</Subtitle>
      <Text>texto</Text>
      <MainButton color="pink">
        <BoldText color="white">Comprar</BoldText>
      </MainButton>
      <TextField type="text"></TextField>
      <Card></Card>
      <ShopCart color="white"></ShopCart>
    </>
  );
};

export default Home;
