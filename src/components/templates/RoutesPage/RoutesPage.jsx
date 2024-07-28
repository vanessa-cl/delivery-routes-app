import * as S from "./RoutesPage.styles";
import PageSubtitle from "../../atoms/Text/PageSubtitle/PageSubtitle";
import PageTitle from "../../atoms/Text/PageTitle/PageTitle";
import Map from "@/components/organisms/Map/Map";
import List from "@/components/organisms/List/List";
import { Container } from "@/styles/generics/Container.styles";
import { route } from "@/utils/route";

export default function RoutesPage() {
  return (
    <S.RoutesPage>
      <PageTitle text="Rota" />
      <PageSubtitle text="Visualize aqui o mapa com as rotas dos pedidos. " />
      <Container>
        <Map />
        <List listType="routes" items={route} />
      </Container>
    </S.RoutesPage>
  );
}
