import { centerItemsBox } from "@/styles/mixins/box.mixin";
import styled from "styled-components";

export const CardHeader = styled.div`
  ${centerItemsBox}
  justify-content: flex-start;
  gap: 16px;
  background-color: ${(props) =>
    props.variant === "primary" ? "var(--red)" : "var(--orange)"};
  border-radius: 16px 16px 0px 0px;
  padding: 0 16px;
`;
