import * as S from "./CreateRoutePage.styles";
import PageSubtitle from "../../atoms/Text/PageSubtitle/PageSubtitle";
import PageTitle from "../../atoms/Text/PageTitle/PageTitle";
import { order } from "@/utils/order";
import List from "@/components/organisms/List/List";
import { Container } from "@/styles/generics/Container.styles";
import MapWrapper from "@/components/organisms/MapWrapper/MapWrapper";
import useRoutes from "@/hooks/useRoutes";
import { useContext } from "react";
import { MapWrapperContext } from "@/context/MapWrapperContext";

export default function CreateRoutePage() {
  const { polylines } = useContext(MapWrapperContext);
  return (
    <S.CreateRoutePage>
      <PageTitle text="Criar nova rota" />
      <PageSubtitle text="Insira os novos pedidos em uma rota para entrega." />
      <Container>
        {/* {console.log(polylines)} */}
        <MapWrapper polylines={polylines} />
        <List listType="order" items={order} />
      </Container>
    </S.CreateRoutePage>
  );
}
