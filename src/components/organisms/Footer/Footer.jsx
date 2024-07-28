import BasicButton from "@/components/atoms/Button/BasicButton/BasicButton";
import * as S from "./Footer.styles";

export default function Footer() {
  return (
    <S.Footer>
      <BasicButton
        id="create-route-button"
        name="create-route-button"
        label="Criar nova rota"
        variant="primary"
      />
    </S.Footer>
  );
}
