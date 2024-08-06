import * as S from "./CreateRoutePage.styles";
import PageSubtitle from "../../atoms/Text/PageSubtitle/PageSubtitle";
import PageTitle from "../../atoms/Text/PageTitle/PageTitle";
import List from "@/components/organisms/List/List";
import { Container } from "@/styles/generics/Container.styles";
import MapWrapper from "@/components/organisms/MapWrapper/MapWrapper";
import { useEffect } from "react";
import { selectedOrders } from "@/utils/orders";
import useDijkstraAlgorithm from "@/hooks/useDijkstraAlgorithm";

export default function CreateRoutePage() {
  // const { polylines } = useContext(MapWrapperContext);
  const { getNodes } = useDijkstraAlgorithm();

  useEffect(() => {
    getNodes();
  }, [getNodes]);

  return (
    <S.CreateRoutePage>
      <PageTitle text="Criar nova rota" />
      <PageSubtitle text="Insira os novos pedidos em uma rota para entrega." />
      <Container>
        <MapWrapper polylines={[]} />
        <List listType="order" items={selectedOrders} />
      </Container>
    </S.CreateRoutePage>
  );
}
