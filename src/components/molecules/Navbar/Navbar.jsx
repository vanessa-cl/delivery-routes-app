import NavLink from "@/components/atoms/NavLink/NavLink";
import * as S from "./Navbar.styles";

const navLinkContents = [
  { id: "order-page", href: "", label: "Pedidos" },
  { id: "routes-page", href: "", label: "Rotas" },
  { id: "menu-page", href: "", label: "Menu" },
];

export default function Navbar() {
  return (
    <S.Navbar>
      {navLinkContents.map((link, idx) => {
        return (
          <NavLink key={idx} id={link.id} href={link.href} label={link.label} />
        );
      })}
    </S.Navbar>
  );
}
