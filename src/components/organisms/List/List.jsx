import * as S from "./List.styles";
import ListTitle from "@/components/atoms/Text/ListTitle/ListTitle";
import ListItem from "@/components/molecules/ListItem/ListItem";
import BasicButton from "@/components/atoms/Button/BasicButton/BasicButton";
import BackButton from "@/components/atoms/Button/BackButton/BackButton";
import ListItemText from "@/components/atoms/Text/ListItemText/ListItemText";
import { useRouter } from "next/router";
import useOrders from "@/hooks/useOrders";
import { useContext, useEffect, useState } from "react";
import { MapWrapperContext } from "@/context/MapWrapperContext";
import useRoutes from "@/hooks/useRoutes";

const goToHome = (router) => {
  router.push("/");
};

const OrdersListView = ({ orders }) => {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const { allLocations, setAllOrdersLocations } = useOrders();
  const { updateCenter, updateMarkers, updatePolylines } =
    useContext(MapWrapperContext);
  const { setRoutePolylines } = useRoutes();
  const router = useRouter();

  useEffect(() => {
    if (allLocations.length < 1) {
      setAllOrdersLocations(orders);
    }
  }, [orders, allLocations, setAllOrdersLocations]);

  useEffect(() => {
    if (allLocations.length > 0) {
      updateMarkers((markers) => [...markers, ...allLocations]);
    }
  }, [allLocations, updateMarkers, updateCenter]);

  const handleOrderClick = (order) => {
    console.log(`Pedido clicado: ${order.id}`);
    if (selectedOrders.includes(order)) {
      const teste = selectedOrders.filter((item) => {
        return item.id !== order.id;
      });
      updatePolylines([]);
      return setSelectedOrders(teste);
    }

    setSelectedOrders([...selectedOrders, order]);
  };

  return (
    <S.List variant="primary">
      {console.log(selectedOrders)}
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
                checked={selectedOrders.includes(order)}
                onClick={() => {
                  handleOrderClick(order);
                  updateCenter(order.location);
                  setRoutePolylines(order);
                }}
              />
            );
          })
        ) : (
          <></>
        )}
      </S.ListWrapper>
      <S.ListFooter>
        <ListItemText text={`Selecionados: ${selectedOrders.length}`} />
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
