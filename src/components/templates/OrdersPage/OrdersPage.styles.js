import { centerItemsBox } from "@/styles/mixins/box.mixin";
import { main } from "@/styles/mixins/main.mixin";
import styled from "styled-components";

export const OrdersPage = styled.main`
  ${main}
`;

export const CardsContainer = styled.div`
  ${centerItemsBox}
  align-items: flex-start;
  justify-content: flex-start;
  margin: 16px 0 8px 0;
  gap: 5%;
  flex-wrap: wrap;
  flex-grow: 1;
`;
