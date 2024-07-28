import { centerItemsBox } from "@/styles/mixins/box.mixin";
import { button } from "@/styles/mixins/button.mixin";
import styled from "styled-components";

export const BackButton = styled.button`
  ${button}
  ${centerItemsBox}

  &:hover {
    background-color: var(--black);
  }
`;
