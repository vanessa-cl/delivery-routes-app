import { centerItemsBox } from "@/styles/mixins/box.mixin";
import styled from "styled-components";

export const Header = styled.header`
  ${centerItemsBox}
  justify-content: space-between;
  background-color: var(--dark-gray);
  border-bottom: var(--red-border);
  padding-left: 24px;
`;
