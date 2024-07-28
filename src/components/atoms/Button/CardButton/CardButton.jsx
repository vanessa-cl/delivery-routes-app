import * as S from "./CardButton.styles";

export default function CardButton({ id, name, variant, label, onClick }) {
  return (
    <S.CardButton id={id} name={name} variant={variant} onClick={onClick}>
      {label}
    </S.CardButton>
  );
}
