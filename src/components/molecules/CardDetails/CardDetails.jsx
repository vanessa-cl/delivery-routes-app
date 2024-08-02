import CardSubtitle from "@/components/atoms/Text/CardSubtitle/CardSubtitle";
import * as S from "./CardDetails.styles";
import CardText from "@/components/atoms/Text/CardText/CardText";
import CardTotalValue from "../CardTotalValue/CardTotalValue";
import CardLink from "@/components/atoms/Text/CardLink/CardLink";

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
          <CardLink id="routes-page" href="/rotas" label="Ver no mapa" />
        </S.CardDetailsRow>
      </S.CardDetailsGroup>
      <CardTotalValue value={100} variant={variant} />
    </S.CardDetails>
  );
}
