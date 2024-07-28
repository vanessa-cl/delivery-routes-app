import Image from "next/image";
import * as S from "./DeleteIconButton.styles";
import trashIcon from "../../../../../public/icons/trash.png";

export default function DeleteIconButton({ onClick }) {
  return (
    <S.DeleteIconButton
      id="delete-button"
      name="delete-button"
      onClick={onClick}
    >
      <Image src={trashIcon} alt="Ícone de deletar" />
    </S.DeleteIconButton>
  );
}
