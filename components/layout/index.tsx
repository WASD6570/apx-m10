import { HeaderMobile } from "components/header";
import { Footer } from "components/footer";

export const Layout = ({ children, searchBar }: any) => {
  return (
    <>
      <HeaderMobile searchBar={searchBar}></HeaderMobile>
      <div style={{ minHeight: "45vh" }}>{children}</div>
      <Footer></Footer>
    </>
  );
};
