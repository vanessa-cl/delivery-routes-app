import * as S from "./CreateRoutePage.styles";
import PageSubtitle from "../../atoms/Text/PageSubtitle/PageSubtitle";
import PageTitle from "../../atoms/Text/PageTitle/PageTitle";
import { order } from "@/utils/order";
import List from "@/components/organisms/List/List";
import { Container } from "@/styles/generics/Container.styles";
import MapWrapper from "@/components/organisms/MapWrapper/MapWrapper";

export default function CreateRoutePage() {
  return (
    <S.CreateRoutePage>
      <PageTitle text="Criar nova rota" />
      <PageSubtitle text="Insira os novos pedidos em uma rota para entrega." />
      <Container>
        <MapWrapper />
        <List listType="order" items={order} />
      </Container>
    </S.CreateRoutePage>
  );
}
