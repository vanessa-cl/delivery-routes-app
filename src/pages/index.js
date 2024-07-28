import Card from "@/components/organisms/Card/Card";
import Header from "@/components/organisms/Header/Header";
import { order } from "@/utils/order";

export default function Home() {
  return (
    <>
      <Header />
      {order.map((item, idx) => {
        return <Card key={idx} order={item} />;
      })}
    </>
  );
}
