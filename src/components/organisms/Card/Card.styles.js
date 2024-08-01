import { centerItemsBox } from "@/styles/mixins/box.mixin";
import styled from "styled-components";

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 420px;
  border: ${(props) =>
    props.variant === "primary" ? "var(--red-border)" : "var(--orange-border)"};
  border-radius: 20px;
  background-color: var(--dark-gray);
`;

export const CardButtonWrapper = styled.div`
  ${centerItemsBox}
`;
