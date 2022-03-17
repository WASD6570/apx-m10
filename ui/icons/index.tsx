import WhiteCart from "../../assets/svg/Logo-white.svg";
import BlackCart from "../../assets/svg/Logo-black.svg";
type Props = {
  color: "black" | "white";
};

export function ShopCart({ color }: Props) {
  return (
    <>{color === "white" ? <WhiteCart></WhiteCart> : <BlackCart></BlackCart>}</>
  );
}
