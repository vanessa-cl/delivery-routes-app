import CardSubtitle from "@/components/atoms/Text/CardSubtitle/CardSubtitle";
import formatNumberToMoney from "@/utils/formatNumberToMoney";
import * as S from "./CardTotalValue.styles";

export default function CardTotalValue({ value, variant }) {
  return (
    <S.CardTotalValue>
      <CardSubtitle text="Total:" variant={variant} />
      <CardSubtitle text={formatNumberToMoney(value)} variant={variant} />
    </S.CardTotalValue>
  );
}
