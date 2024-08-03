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
  const {
    setRoutePolylines,
    createRoute,
    routes,
    completedRoute,
    setRouteData,
  } = useRoutes();
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
      const updatedOrders = selectedOrders.filter((item) => {
        return item.id !== order.id;
      });
      // updatePolylines([]);
      return setSelectedOrders(updatedOrders);
    }

    setSelectedOrders([...selectedOrders, order]);
  };

  return (
    <S.List variant="primary">
      <ListTitle text="Selecione os pedidos para a próxima rota de entregas:" />
      <S.ListWrapper>
        {allLocations.length > 0 ? (
          allLocations.map((order, idx) => {
            return (
              <ListItem
                key={idx}
                id={order.id}
                itemType="order"
                details={{
                  address: order.address,
                }}
                variant="primary"
                checked={selectedOrders.includes(order)}
                onClick={() => {
                  handleOrderClick(order);
                  updateCenter(order.location);
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
            onClick={() => {
              createRoute(selectedOrders);
              router.push("/rotas");
            }}
          />
        </S.ListButtonWrapper>
      </S.ListFooter>
    </S.List>
  );
};

const RoutesListView = () => {
  const router = useRouter();
  const { getBestRoute, routes, getRoutePolylines } = useRoutes();
  const { updateBestRoute, bestRoute } = useContext(MapWrapperContext);

  useEffect(() => {
    if (!(routes.length > 0)) {
      return;
    }
    const findBestRoute = getBestRoute(routes);
    updateBestRoute(findBestRoute[0]);
    getRoutePolylines(findBestRoute[0]);
  }, [getBestRoute, routes, updateBestRoute, getRoutePolylines]);

  return (
    <S.List variant="secondary">
      <ListTitle
        text={
          routes.length > 0
            ? "Clique em uma rota para visualizar no mapa:"
            : "Nenhuma rota criada para visualização."
        }
      />
      <S.ListWrapper>
        {routes.length > 0 ? (
          routes.map((route, idx) => {
            return (
              <ListItem
                key={idx}
                id={route.id}
                itemType="route"
                details={{
                  orders: route.orders,
                  cost: route.cost,
                  fuel: route.fuel,
                  approximateTime: route.approximateTime,
                  distance: route.distance,
                }}
                variant="secondary"
                onClick={() => getRoutePolylines(route)}
                bestRoute={bestRoute.id === route.id}
              />
            );
          })
        ) : (
          <></>
        )}
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
