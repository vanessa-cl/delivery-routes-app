import * as S from "./RoutesPage.styles";
import PageSubtitle from "../../atoms/Text/PageSubtitle/PageSubtitle";
import PageTitle from "../../atoms/Text/PageTitle/PageTitle";
import List from "@/components/organisms/List/List";
import { Container } from "@/styles/generics/Container.styles";
import MapWrapper from "@/components/organisms/MapWrapper/MapWrapper";
import { MapWrapperContext } from "@/context/MapWrapperContext";
import { useContext, useEffect } from "react";
import useRoutes from "@/hooks/useRoutes";

export default function RoutesPage() {
  const { polylines, routes, updateRoutes } = useContext(MapWrapperContext);

  return (
    <S.RoutesPage>
      <PageTitle text="Rotas" />
      <PageSubtitle text="Visualize aqui o mapa com as rotas dos pedidos. " />
      <Container id="container">
        <MapWrapper polylines={polylines} />
        <List listType="routes" />
      </Container>
    </S.RoutesPage>
  );
}
