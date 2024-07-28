import Link from "next/link";
import * as S from "./NavLink.styles";

export default function NavLink({ id, href, label }) {
  return (
    <S.NavLink>
      <Link id={id} href={href}>
        {label}
      </Link>
    </S.NavLink>
  );
}
