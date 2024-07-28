import { centerItemsBox } from "@/styles/mixins/box.mixin";
import styled from "styled-components";

export const NavLink = styled.div`
  background-color: var(--dark-gray);
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;
  color: var(--white);
  width: 200px;
  height: 100px;
  cursor: pointer;
  ${centerItemsBox}

  &:hover,
  &:active {
    border-right: var(--red-border);
    border-left: var(--red-border);
    border-bottom: var(--red-border);
    background-color: var(--black);
    color: var(--red);
  }
`;
