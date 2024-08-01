import formatNumberToMoney from "@/utils/formatNumberToMoney";
import ListItemText from "../../atoms/Text/ListItemText/ListItemText";
import ListItemTitle from "../../atoms/Text/ListItemTitle/ListItemTitle";
import * as S from "./ListItem.styles";
import BasicButton from "@/components/atoms/Button/BasicButton/BasicButton";
import DeleteIconButton from "@/components/atoms/Button/DeleteIconButton/DeleteIconButton";
import classNames from "classnames";

const OrderDetails = ({ details: { address } }) => {
  return (
    <S.ListItemColumn>
      <ListItemText text="Endereço:" variant="primary" />
      <ListItemText text={address} />
    </S.ListItemColumn>
  );
};

const RouteDetails = ({ details: { orders, cost, fuel, approximateTime } }) => {
  const filteredOrdersIds = orders.map((order) => `N°${order.id}`).join(", ");

  return (
    <>
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
    </>
  );
};

export default function ListItem({
  id,
  itemType,
  title,
  distance,
  details,
  variant,
  checked,
  onClick,
  bestRoute,
}) {
  const itemClasses = classNames({
    checked: checked,
    bestRoute: bestRoute,
  });
  return (
    <S.ListItem variant={variant} onClick={onClick} className={itemClasses}>
      <S.ListItemBetweenRow>
        <ListItemTitle text={`${title} N°${id}`} variant={variant} />
        {distance ? (
          <S.ListItemFirstRow>
            <ListItemText text="Distância total:" variant={variant} />
            <ListItemText text={`${(distance / 1000).toFixed(2)}km`} />
          </S.ListItemFirstRow>
        ) : (
          <></>
        )}
      </S.ListItemBetweenRow>
      {itemType === "route" && details ? (
        <RouteDetails details={{ ...details }} />
      ) : (
        <OrderDetails details={{ ...details }} />
      )}
      {itemType === "route" ? (
        <S.ListItemButtonWrapper>
          <DeleteIconButton />
          <BasicButton
            id="dispatch-route-button"
            name="dispatch-route-button"
            label="Despachar"
            variant="secondary"
          />
        </S.ListItemButtonWrapper>
      ) : (
        <></>
      )}
    </S.ListItem>
  );
}
