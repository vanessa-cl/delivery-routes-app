import * as S from "./List.styles";
import ListTitle from "@/components/atoms/Text/ListTitle/ListTitle";
import ListItem from "@/components/molecules/ListItem/ListItem";
import BasicButton from "@/components/atoms/Button/BasicButton/BasicButton";
import BackButton from "@/components/atoms/Button/BackButton/BackButton";
import ListItemText from "@/components/atoms/Text/ListItemText/ListItemText";
import { useRouter } from "next/router";
import useOrders from "@/hooks/useOrders";
import { useContext, useEffect } from "react";
import { MapWrapperContext } from "@/context/MapWrapperContext";

const goToHome = (router) => {
  router.push("/");
};

const OrdersListView = ({ orders }) => {
  const { allLocations, setAllOrdersLocations } = useOrders();
  const { updateCenter, updateMarkers } = useContext(MapWrapperContext);
  const router = useRouter();

  useEffect(() => {
    if (allLocations.length < 1) {
      setAllOrdersLocations(orders);
    }
  }, [orders, allLocations, setAllOrdersLocations]);

  useEffect(() => {
    if (allLocations.length > 0) {
      updateCenter(allLocations[0].location);
      updateMarkers(allLocations);
    }
  }, [allLocations, updateMarkers, updateCenter]);

  return (
    <S.List variant="primary">
      {console.log(allLocations)}
      <ListTitle text="Selecione os pedidos para a próxima rota de entregas:" />
      <S.ListWrapper>
        {allLocations.length > 0 ? (
          allLocations.map((order, idx) => {
            return (
              <ListItem
                key={idx}
                id={order.id}
                itemType="order"
                title="Pedido"
                distance={order.distance}
                details={{
                  address: order.address,
                }}
                variant="primary"
                onClick={() => updateCenter(order.location)}
              />
            );
          })
        ) : (
          <></>
        )}
      </S.ListWrapper>
      <S.ListFooter>
        <ListItemText text="Selecionados: 2" />
        <S.ListButtonWrapper>
          <BackButton
            id="back-button"
            name="back-button"
            label="Voltar"
            onClick={() => goToHome(router)}
          />
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

const RoutesListView = ({ routes }) => {
  const router = useRouter();
  return (
    <S.List variant="secondary">
      <ListTitle text="Clique em uma rota para visualizar no mapa:" />
      <S.ListWrapper>
        {routes.map((item, idx) => {
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
        <BackButton
          id="back-button"
          name="back-button"
          label="Voltar"
          onClick={() => goToHome(router)}
        />
      </S.ListEndFooter>
    </S.List>
  );
};

export default function List({ listType, items }) {
  return listType === "routes" ? (
    <RoutesListView routes={items} />
  ) : (
    <OrdersListView orders={items} />
  );
}
