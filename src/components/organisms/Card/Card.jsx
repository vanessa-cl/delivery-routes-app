import { useEffect, useState } from "react";
import * as S from "./Card.styles";
import { ORDER_STATUS } from "@/utils/orderStatus";
import CardHeader from "@/components/molecules/CardHeader/CardHeader";
import CardStatus from "@/components/atoms/CardStatus/CardStatus";
import CardButton from "@/components/atoms/Button/CardButton/CardButton";
import CardDetails from "@/components/molecules/CardDetails/CardDetails";

import getStyleVariant from "@/utils/getStyleVariant";

export default function Card({ order }) {
  const [styleVariant, setStyleVariant] = useState("primary");

  useEffect(() => {
    setStyleVariant(getStyleVariant(order.statusId));
  }, [order]);

  return (
    <S.Card variant={styleVariant}>
      <CardHeader
        orderId={order.id}
        orderStatusId={order.statusId}
        variant={styleVariant}
      />
      <CardDetails order={order} variant={styleVariant} />
      {order.statusId === ORDER_STATUS.new.id ? (
        <S.CardButtonWrapper>
          <CardButton
            id="accept-order-button"
            name=""
            label="Aceitar"
            variant="primary"
          />
          <CardButton
            id="reject-order-button"
            name=""
            label="Rejeitar"
            variant="secondary"
          />
        </S.CardButtonWrapper>
      ) : (
        <CardStatus orderStatusId={order.statusId} />
      )}
    </S.Card>
  );
}
