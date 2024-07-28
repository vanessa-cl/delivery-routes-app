import Image from "next/image";
import * as S from "./CardIcon.styles";
import newIcon from "../../../../public/icons/new.png";
import burgerIcon from "../../../../public/icons/burger.png";
import deliveryIcon from "../../../../public/icons/delivery-truck.png";

const ORDER_STATUS_ICONS = {
  1: { icon: newIcon, description: "Novo pedido" },
  2: { icon: burgerIcon, description: "Pedido em preparo" },
  3: { icon: deliveryIcon, description: "Pedido em rota de entrega" },
};

export default function CardIcon({ orderStatusId }) {
  return (
    <S.CardIcon title={ORDER_STATUS_ICONS[orderStatusId].description}>
      <Image
        src={ORDER_STATUS_ICONS[orderStatusId].icon}
        alt={ORDER_STATUS_ICONS[orderStatusId].description}
      />
    </S.CardIcon>
  );
}
