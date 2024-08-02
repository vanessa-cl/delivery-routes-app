import { centerItemsBox } from "@/styles/mixins/box.mixin";
import styled from "styled-components";

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 440px;
  border: ${(props) =>
    props.variant === "primary" ? "var(--red-border)" : "var(--orange-border)"};
  border-radius: 20px;
  background-color: var(--dark-gray);
  box-shadow: var(--main-box-shadow);
`;

export const CardButtonWrapper = styled.div`
  ${centerItemsBox}
`;
