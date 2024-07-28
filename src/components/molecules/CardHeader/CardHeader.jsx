import CardIcon from "@/components/atoms/CardIcon/CardIcon";
import * as S from "./CardHeader.styles";
import CardTitle from "@/components/atoms/Text/CardTitle/CardTitle";

export default function CardHeader({ orderId, orderStatusId, variant }) {
  return (
    <S.CardHeader variant={variant}>
      <CardIcon orderStatusId={orderStatusId} />
      <CardTitle orderId={orderId} />
    </S.CardHeader>
  );
}
