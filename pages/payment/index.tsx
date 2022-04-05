import type { NextPage } from "next";
import { Layout } from "components/layout";
import { PaymentComp } from "components/payment";

const Payment: NextPage = () => {
  return (
    <Layout>
      <PaymentComp />
    </Layout>
  );
};

export default Payment;
