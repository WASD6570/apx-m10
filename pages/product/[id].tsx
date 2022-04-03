import type { NextPage } from "next";
import { Layout } from "components/layout";
import { ProductPage } from "components/product-comp";

const Id: NextPage = () => {
  return (
    <Layout searchBar>
      <ProductPage />
    </Layout>
  );
};

export default Id;
