import { centerItemsBox } from "@/styles/mixins/box.mixin";
import styled from "styled-components";

export const Container = styled.div`
  ${centerItemsBox}
  margin: 16px 0;
  flex-grow: 1;
  height: calc(100vh - 185px);
  box-shadow: var(--main-box-shadow);
`;
