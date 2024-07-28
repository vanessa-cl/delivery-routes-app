import * as S from "./CardStatus.styles";

const ORDER_STATUS_LABELS = {
  2: { variant: "primary", label: "Em preparo" },
  3: { variant: "secondary", label: "Em rota de entrega" },
};

export default function CardStatus({ orderStatusId }) {
  return (
    <S.CardStatus variant={ORDER_STATUS_LABELS[orderStatusId].variant}>
      {ORDER_STATUS_LABELS[orderStatusId].label}
    </S.CardStatus>
  );
}
