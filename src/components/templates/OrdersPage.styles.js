import { centerItemsBox } from "@/styles/mixins/box.mixin";
import styled from "styled-components";

export const OrdersPage = styled.main`
  margin: 42px 42px 0 42px;
  display: flex;
  flex-direction: column;
  height: auto;
  flex-grow: 1;
`;

export const CardsContainer = styled.div`
  ${centerItemsBox}
  justify-content: space-between;
  margin: 32px 0;
`;
