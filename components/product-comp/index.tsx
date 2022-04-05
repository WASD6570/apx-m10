import { ProductCard } from "components/product-card";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

export const ProductPage = () => {
  const router = useRouter();
  const product = router.query.data
    ? JSON.parse(router.query.data as string)
    : null;
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
        {product && <ProductCard product={product} />}
      </Box>
    </Container>
  );
};
