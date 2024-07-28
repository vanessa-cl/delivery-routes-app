import * as S from "./OrdersPage.styles";
import PageSubtitle from "../../atoms/Text/PageSubtitle/PageSubtitle";
import PageTitle from "../../atoms/Text/PageTitle/PageTitle";
import Card from "../../organisms/Card/Card";
import { order } from "@/utils/order";
import Footer from "../../organisms/Footer/Footer";

export default function OrdersPage() {
  return (
    <S.OrdersPage>
      <PageTitle text="Pedidos" />
      <PageSubtitle text="Acompanhe aqui o status dos novos pedidos." />
      <S.CardsContainer>
        {order.map((item, idx) => {
          return <Card key={idx} order={item} />;
        })}
      </S.CardsContainer>
      <Footer />
    </S.OrdersPage>
  );
}
