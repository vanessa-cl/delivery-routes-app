import { centerItemsBox } from "@/styles/mixins/box.mixin";
import styled from "styled-components";

export const NavLink = styled.div`
  background-color: var(--dark-gray);
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  color: var(--white);
  width: 140px;
  height: 70px;
  cursor: pointer;
  ${centerItemsBox}

  & a {
    ${centerItemsBox}
    width: 100%;
    height: 100%;
  }

  &.active {
    border-right: var(--red-border);
    border-left: var(--red-border);
    border-bottom: var(--red-border);
    background-color: var(--black);
    color: var(--red);
  }

  &:hover {
    border-right: var(--red-border);
    border-left: var(--red-border);
    border-bottom: var(--red-border);
    background-color: var(--black);
    color: var(--red);
  }
`;
