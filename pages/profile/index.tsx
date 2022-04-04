import type { NextPage } from "next";
import { Layout } from "components/layout";
import { ProfileForm } from "components/profile";
const MyProfile: NextPage = () => {
  return (
    <Layout>
      <ProfileForm />
    </Layout>
  );
};

export default MyProfile;
