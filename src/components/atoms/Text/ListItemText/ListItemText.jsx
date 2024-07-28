import * as S from "./ListItemText.styles";

export default function ListItemText({ text, variant }) {
  return <S.ListItemText variant={variant}>{text}</S.ListItemText>;
}
