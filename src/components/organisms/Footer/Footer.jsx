import BasicButton from "@/components/atoms/Button/BasicButton/BasicButton";
import * as S from "./Footer.styles";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  return (
    <S.Footer>
      <BasicButton
        id="create-route-button"
        name="create-route-button"
        label="Criar nova rota"
        variant="primary"
        onClick={() => router.push("criar-nova-rota")}
      />
    </S.Footer>
  );
}
