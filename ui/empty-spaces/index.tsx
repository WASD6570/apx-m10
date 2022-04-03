import BackgroundImage from "public/background.webp";
import Image from "next/image";
import styled from "@emotion/styled";

const ContainerParent = styled.div`
  height: 42vh;
  position: relative;
  margin: 0 !important;
`;

const ContainerChild = styled.div`
  position: absolute;
  top: -30px;
  left: -25px;
  height: 60vh;
  width: 100vw;
  overflow: scroll;
  z-index: -100;
  background-size: cover;
`;

export const EmptySpaceFiller = () => {
  return (
    <ContainerParent>
      <ContainerChild>
        <Image src={BackgroundImage} layout="fill" />
      </ContainerChild>
    </ContainerParent>
  );
};
