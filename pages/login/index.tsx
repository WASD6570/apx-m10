import type { NextPage } from "next";
import { Layout } from "components/layout";
import { EmailFrom } from "components/email-form";

const Login: NextPage = () => {
  return (
    <Layout>
      <EmailFrom />
    </Layout>
  );
};

export default Login;
