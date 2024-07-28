import { centerItemsBox } from "@/styles/mixins/box.mixin";
import { main } from "@/styles/mixins/main.mixin";
import styled from "styled-components";

export const OrdersPage = styled.main`
  ${main}
`;

export const CardsContainer = styled.div`
  ${centerItemsBox}
  justify-content: space-between;
  margin: 32px 0;
`;
