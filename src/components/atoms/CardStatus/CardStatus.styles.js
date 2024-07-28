import { centerItemsBox } from "@/styles/mixins/box.mixin";
import styled from "styled-components";

export const CardStatus = styled.span`
  background-color: ${(props) =>
    props.variant === "primary" ? "var(--red)" : "var(--orange)"};
  color: var(--white);
  border-radius: 0px 0px 16px 16px;
  border: none;
  font-size: 24px;
  font-family: "Outfit";
  font-weight: 500;
  width: 100%;
  height: 60px;
  flex-shrink: 0;
  ${centerItemsBox}

  &:hover, :active {
    background-color: ${(props) =>
      props.variant === "primary" ? "var(--dark-red)" : "var(--dark-orange)"};
  }
`;
