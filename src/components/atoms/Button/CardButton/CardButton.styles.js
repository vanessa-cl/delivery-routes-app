import { centerItemsBox } from "@/styles/mixins/box.mixin";
import styled from "styled-components";

export const CardButton = styled.button`
  background-color: ${(props) =>
    props.variant === "primary" ? "var(--red)" : "var(--white)"};
  color: ${(props) =>
    props.variant === "primary" ? "var(--white)" : "var(--red)"};
  border-radius: ${(props) =>
    props.variant === "primary" ? "0px 0px 0px 16px" : "0px 0px 18px 0px"};
  border: none;
  font-size: 24px;
  font-family: "Outfit";
  font-weight: 500;
  width: 180px;
  height: 60px;
  cursor: pointer;
  ${centerItemsBox}

  &:hover, :active {
    background-color: ${(props) =>
      props.variant === "primary" ? "var(--dark-red)" : "var(--light-gray)"};
  }
`;
