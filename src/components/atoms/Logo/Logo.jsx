import * as S from "./Logo.styles";
import Image from "next/image";
import BitsBurgerLogo from "../../../../public/svgs/Bits_Burger_Logo.svg";

export default function Logo() {
  return (
    <S.Logo>
      <Image src={BitsBurgerLogo} alt="Bits Burger Logo" />
    </S.Logo>
  );
}
