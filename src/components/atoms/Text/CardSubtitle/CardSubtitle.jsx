import * as S from "./CardSubtitle.styles";

export default function CardSubtitle({ text, variant }) {
  return <S.CardSubtitle variant={variant}>{text}</S.CardSubtitle>;
}
