import formatNumberToMoney from "@/utils/formatNumberToMoney";
import ListItemText from "../../atoms/Text/ListItemText/ListItemText";
import ListItemTitle from "../../atoms/Text/ListItemTitle/ListItemTitle";
import * as S from "./ListItem.styles";
import BasicButton from "@/components/atoms/Button/BasicButton/BasicButton";
import DeleteIconButton from "@/components/atoms/Button/DeleteIconButton/DeleteIconButton";
import classNames from "classnames";
import Checkbox from "@/components/atoms/Checkbox/Checkbox";
import { toast } from "react-toastify";

const OrderDetails = ({ id, checked, details: { address }, variant }) => {
  return (
    <>
      <S.ListItemBetweenRow>
        <ListItemTitle text={`Pedido N°${id}`} variant={variant} />
        <Checkbox checked={checked} />
      </S.ListItemBetweenRow>
      <S.ListItemColumn>
        <ListItemText text="Endereço:" variant="primary" />
        <ListItemText text={address} />
      </S.ListItemColumn>
    </>
  );
};

const RouteDetails = ({
  id,
  bestRoute,
  details: { orders, cost, fuel, approximateTime, distance },
  variant,
}) => {
  const filteredOrdersIds = orders.map((order) => `N°${order.id}`).join(", ");
  const notify = () =>
    toast.success(`Pedidos da rota n°${id} despachados com sucesso!`);

  return (
    <>
      <S.ListItemBetweenRow>
        <ListItemTitle text={`Rota N°${id}`} variant={variant} />
        <S.ListItemFirstRow>
          <ListItemText text="Distância total:" variant={variant} />
          <ListItemText text={`${(distance / 1000).toFixed(2)}km`} />
        </S.ListItemFirstRow>
      </S.ListItemBetweenRow>
      <S.ListItemRow>
        <ListItemText text="Pedidos:" variant="secondary" />
        <ListItemText text={filteredOrdersIds} />
      </S.ListItemRow>
      <S.ListItemRow>
        <ListItemText text="Combustível gasto:" variant="secondary" />
        <ListItemText text={`${fuel}L`} />
      </S.ListItemRow>
      <S.ListItemRow>
        <ListItemText text="Custo total da entrega:" variant="secondary" />
        <ListItemText text={formatNumberToMoney(cost)} />
      </S.ListItemRow>
      <S.ListItemRow>
        <ListItemText text="Entrega aproximada em até:" variant="secondary" />
        <ListItemText text={`${approximateTime.toFixed(2)}min`} />
      </S.ListItemRow>
      {bestRoute ? (
        <S.BestRouteText>Melhor trajeto selecionado</S.BestRouteText>
      ) : (
        <></>
      )}
      <S.ListItemButtonWrapper>
        <DeleteIconButton />
        <BasicButton
          id="dispatch-route-button"
          name="dispatch-route-button"
          label="Despachar"
          variant="secondary"
          onClick={notify}
        />
      </S.ListItemButtonWrapper>
    </>
  );
};

export default function ListItem({
  id,
  itemType,
  details,
  variant,
  checked,
  onClick,
  bestRoute,
}) {
  const itemClasses = classNames({
    checked,
    bestRoute,
  });
  return (
    <S.ListItem
      variant={variant}
      onClick={onClick}
      className={itemClasses}
      aria-checked={checked}
    >
      {itemType === "route" && details ? (
        <RouteDetails
          id={id}
          bestRoute={bestRoute}
          details={{ ...details }}
          variant={variant}
        />
      ) : (
        <OrderDetails
          id={id}
          checked={checked}
          details={{ ...details }}
          variant={variant}
        />
      )}
    </S.ListItem>
  );
}
