import { centerItemsBox } from "@/styles/mixins/box.mixin";
import styled from "styled-components";

export const CardDetails = styled.div`
  padding: 8px 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardDetailsRow = styled.div`
  ${centerItemsBox}
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CardDetailsGroup = styled.div`
  
`;

export const CardDetailsColumn = styled.div`
  margin-bottom: 8px;
`;