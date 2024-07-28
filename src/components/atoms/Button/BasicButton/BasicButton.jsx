import * as S from "./BasicButton.styles";

export default function BasicButton({ id, name, variant, label, onClick }) {
  return (
    <S.BasicButton id={id} name={name} variant={variant} onClick={onClick}>
      {label}
    </S.BasicButton>
  );
}
