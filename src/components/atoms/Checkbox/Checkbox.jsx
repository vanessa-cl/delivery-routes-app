import Image from "next/image";
import checkedBox from "../../../../public/icons/checked-box.png";
import uncheckedBox from "../../../../public/icons/unchecked-box.png";
import * as S from "./Checkbox.styles";

export default function Checkbox({ checked }) {
  return (
    <S.CheckboxWrapper>
      {checked ? (
        <Image src={checkedBox} alt="checked-checkbox" />
      ) : (
        <Image src={uncheckedBox} alt="unchecked-checkbox" />
      )}
    </S.CheckboxWrapper>
  );
}
