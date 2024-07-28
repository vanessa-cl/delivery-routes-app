import Logo from "@/components/atoms/Logo/Logo";
import * as S from "./Header.styles";
import Navbar from "@/components/molecules/Navbar/Navbar";

export default function Header() {
  return (
    <S.Header>
      <Logo />
      <Navbar />
    </S.Header>
  );
}
