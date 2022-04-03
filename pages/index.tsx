import type { NextPage } from "next";
import { Layout } from "components/layout";
import { MainPage } from "components/home-comp";
import { staticFetcher } from "lib/api";

const Home: NextPage = ({ data }: any) => {
  return (
    <Layout>
      <MainPage topProducts={data} />
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await staticFetcher("/search/top", "GET");

  return {
    props: {
      data,
    },
  };
};
