import * as S from "./ListItemTitle.styles";

export default function ListItemTitle({ text, variant }) {
  return <S.ListItemTitle variant={variant}>{text}</S.ListItemTitle>;
}
