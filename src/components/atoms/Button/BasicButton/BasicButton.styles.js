import { centerItemsBox } from "@/styles/mixins/box.mixin";
import styled from "styled-components";

export const BasicButton = styled.button`
  background-color: ${(props) =>
    props.variant === "primary" ? "var(--red)" : "var(--orange)"};
  color: var(--white);
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-family: "Outfit";
  font-weight: 500;
  width: 156px;
  height: 38px;
  cursor: pointer;
  ${centerItemsBox}

  &:hover, :active {
    background-color: ${(props) =>
      props.variant === "primary" ? "var(--dark-red)" : "var(--dark-orange)"};
  }
`;
