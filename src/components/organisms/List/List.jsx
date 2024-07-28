import { useEffect, useState } from "react";
import * as S from "./List.styles";
import getStyleVariant from "@/utils/getStyleVariant";
import ListTitle from "@/components/atoms/Text/ListTitle/ListTitle";
import { route } from "@/utils/route";
import ListItem from "@/components/molecules/ListItem/ListItem";
import { order } from "@/utils/order";
import BasicButton from "@/components/atoms/Button/BasicButton/BasicButton";
import BackButton from "@/components/atoms/Button/BackButton/BackButton";
import ListItemText from "@/components/atoms/Text/ListItemText/ListItemText";

const OrdersListView = () => {
  return (
    <S.List variant="primary">
      <ListTitle text="Selecione os pedidos que farão parte da próxima rota de entregas:" />
      <S.ListWrapper>
        {order.map((item, idx) => {
          return (
            <ListItem
              key={idx}
              id={item.id}
              itemType="order"
              title="Pedido"
              distance={item.distance}
              details={{
                address: item.address,
              }}
              variant="primary"
            />
          );
        })}
      </S.ListWrapper>
      <S.ListFooter>
        <ListItemText text="Selecionados: 2" />
        <S.ListButtonWrapper>
          <BackButton id="back-button" name="back-button" label="Voltar" />
          <BasicButton
            id="create-route-button"
            name="create-route-button"
            label="Criar rota"
            variant="primary"
          />
        </S.ListButtonWrapper>
      </S.ListFooter>
    </S.List>
  );
};

const RoutesListView = () => {
  return (
    <S.List variant="secondary">
      <ListTitle text="Clique em uma rota para visualizar no mapa:" />
      <S.ListWrapper>
        {route.map((item, idx) => {
          return (
            <ListItem
              key={idx}
              id={item.id}
              itemType="route"
              title="Rota"
              distance={item.totalDistance}
              details={{
                orders: item.orders,
                cost: item.cost,
                fuel: item.fuel,
                approximateTime: item.approximateTime,
              }}
              variant="secondary"
            />
          );
        })}
      </S.ListWrapper>
      <S.ListEndFooter>
        <BackButton id="back-button" name="back-button" label="Voltar" />
      </S.ListEndFooter>
    </S.List>
  );
};

export default function List({ listType }) {
  // const [styleVariant, setStyleVariant] = useState("primary");

  // useEffect(() => {
  //   setStyleVariant(getStyleVariant(order.statusId));
  // }, [order]);

  return listType === "routes" ? <RoutesListView /> : <OrdersListView />;
}
