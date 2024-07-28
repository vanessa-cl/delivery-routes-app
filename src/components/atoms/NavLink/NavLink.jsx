import Link from "next/link";
import * as S from "./NavLink.styles";

export default function NavLink({
  id,
  href,
  label,
  activeClassname,
  className,
}) {
  return (
    <S.NavLink activeClassname={activeClassname} className={className}>
      <Link id={id} href={href}>
        {label}
      </Link>
    </S.NavLink>
  );
}
