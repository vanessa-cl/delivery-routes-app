import NavLink from "@/components/atoms/NavLink/NavLink";
import * as S from "./Navbar.styles";
import { useRouter } from "next/router";

const navLinkContents = [
  { id: "order-page", href: "/", label: "Pedidos" },
  { id: "routes-page", href: "/rotas", label: "Rotas" },
  { id: "menu-page", href: "/not-found", label: "Menu" },
];

export default function Navbar() {
  const router = useRouter();
  return (
    <S.Navbar>
      {navLinkContents.map((link, idx) => {
        return (
          <NavLink
            key={idx}
            id={link.id}
            href={link.href}
            label={link.label}
            className={router.pathname === link.href ? "active" : ""}
          />
        );
      })}
    </S.Navbar>
  );
}
