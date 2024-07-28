import * as S from "./BackButton.styles";

export default function BackButton({ id, name, label, onClick }) {
  return (
    <S.BackButton id={id} name={name} onClick={onClick}>
      {label}
    </S.BackButton>
  );
}