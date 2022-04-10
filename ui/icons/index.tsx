import WhiteCart from "../../assets/svg/Logo-white.svg";
import BlackCart from "../../assets/svg/Logo-black.svg";
import Twitter from "../../assets/svg/twitter.svg";
import Instagram from "../../assets/svg/instagram.svg";
import APX from "../../assets/svg/a_2022_apx.svg";
import LinkedIn from "../../assets/svg/linkedin.svg";
import GitHub from "../../assets/svg/github.svg";

type Props = {
  color: "black" | "white";
  children?: any;
};

export function ShopCart({ color, children }: Props) {
  return (
    <>
      {color === "white" ? (
        <WhiteCart>{children}</WhiteCart>
      ) : (
        <BlackCart>{children}</BlackCart>
      )}
    </>
  );
}

export function TwitterIcon() {
  return <Twitter />;
}

export function InstagramIcon() {
  return <Instagram />;
}

export function APXIcon() {
  return <APX />;
}

export function LinkedInIcon() {
  return <LinkedIn />;
}

export function GitHubIcon() {
  return <GitHub />;
}
