import { centerItemsBox } from "@/styles/mixins/box.mixin";
import { button } from "@/styles/mixins/button.mixin";
import styled from "styled-components";

export const BasicButton = styled.button`
  ${button}
  background-color: ${(props) =>
    props.variant === "primary" ? "var(--red)" : "var(--orange)"};
  ${centerItemsBox}

  &:hover, :active {
    background-color: ${(props) =>
      props.variant === "primary" ? "var(--dark-red)" : "var(--dark-orange)"};
  }
`;
