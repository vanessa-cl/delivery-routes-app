import { centerItemsBox } from "@/styles/mixins/box.mixin";
import styled from "styled-components";

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 500px;
  border: ${(props) =>
    props.variant === "primary" ? "var(--red-border)" : "var(--orange-border)"};
  border-radius: 20px;
`;

export const CardButtonWrapper = styled.div`
  ${centerItemsBox}
`;
