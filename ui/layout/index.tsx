import { HeaderMobile } from "ui/header";
import { Footer } from "ui/footer";

export const Layuot = ({ children }: any) => {
  return (
    <>
      <HeaderMobile searchBar={false}></HeaderMobile>
      <div style={{ minHeight: "45vh" }}>{children}</div>
      <Footer></Footer>
    </>
  );
};
