import * as S from "./RoutesPage.styles";
import PageSubtitle from "../../atoms/Text/PageSubtitle/PageSubtitle";
import PageTitle from "../../atoms/Text/PageTitle/PageTitle";
import List from "@/components/organisms/List/List";
import { Container } from "@/styles/generics/Container.styles";
import { route } from "@/utils/route";
import MapWrapper from "@/components/organisms/MapWrapper/MapWrapper";
import { MapWrapperContext } from "@/context/MapWrapperContext";
import { useContext } from "react";

export default function RoutesPage() {
  const { polylines } = useContext(MapWrapperContext);
  return (
    <S.RoutesPage>
      <PageTitle text="Rotas" />
      <PageSubtitle text="Visualize aqui o mapa com as rotas dos pedidos. " />
      <Container id="container">
        <MapWrapper polylines={polylines}/>
        <List listType="routes" items={route} />
      </Container>
    </S.RoutesPage>
  );
}
