import Link from "next/link";
import * as S from "./CardLink.styles";

export default function CardLink({ id, href, label }) {
  return (
    <S.CardLink>
      <Link id={id} href={href}>
        {label}
      </Link>
    </S.CardLink>
  );
}
