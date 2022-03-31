import { HeaderMobile } from "ui/header";
import { Footer } from "ui/footer";

export const Layuot = ({ children, searchBar }: any) => {
  return (
    <>
      <HeaderMobile searchBar={searchBar}></HeaderMobile>
      <div style={{ minHeight: "45vh" }}>{children}</div>
      <Footer></Footer>
    </>
  );
};
