import CardSubtitle from "@/components/atoms/Text/CardSubtitle/CardSubtitle";
import * as S from "./CardDetails.styles";
import CardText from "@/components/atoms/Text/CardText/CardText";
import CardTotalValue from "../CardTotalValue/CardTotalValue";

export default function CardDetails({ order, variant }) {
  return (
    <S.CardDetails>
      <S.CardDetailsGroup>
        <S.CardDetailsRow>
          <CardSubtitle text="Cliente:" variant={variant} />
          <CardText text={order.clientName} />
        </S.CardDetailsRow>
        <S.CardDetailsColumn>
          <CardSubtitle text="Detalhes:" variant={variant} />
          {order.details.items.map((item, idx) => {
            return (
              <li key={idx}>
                <CardText text={item} />
              </li>
            );
          })}
        </S.CardDetailsColumn>
      </S.CardDetailsGroup>
      <S.CardDetailsGroup>
        <S.CardDetailsColumn>
          <CardSubtitle text="Endereço:" variant={variant} />
          <CardText text={order.address} />
        </S.CardDetailsColumn>
        <S.CardDetailsRow>
          <CardSubtitle text="Rota selecionada:" variant={variant} />
          <CardText text="Ver no mapa" />
        </S.CardDetailsRow>
      </S.CardDetailsGroup>
      <CardTotalValue value={100} variant={variant} />
    </S.CardDetails>
  );
}
