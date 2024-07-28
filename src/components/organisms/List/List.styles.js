import { centerItemsBox } from "@/styles/mixins/box.mixin";
import styled from "styled-components";

export const List = styled.section`
  width: 550px;
  height: 100%;
  padding: 20px;
  background-color: var(--dark-gray);
  ${centerItemsBox}
  flex-direction: column;
  justify-content: space-between;
  border: ${(props) =>
    props.variant === "primary" ? "var(--red-border)" : "var(--orange-border)"};
  border-radius: 0 20px 20px 0px;
  border-left: none;
`;

export const ListWrapper = styled.ul`
  ${centerItemsBox}
  justify-content: flex-start;
  margin: 16px 0;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 24px;
  overflow-y: scroll;

  ::-webkit-scrollbar,
  ::-moz-scrollbar {
    width: 10px; /* Largura da barra */
  }

  ::-webkit-scrollbar-thumb,
  ::-moz-scrollbar-thumb {
    background: #d6d6d6;
    border-radius: 4px;
  }
`;

export const ListButtonWrapper = styled.div`
  ${centerItemsBox}
  gap: 16px;
`;

export const ListFooter = styled.div`
  width: 100%;
  ${centerItemsBox}
  justify-content: space-between;
`;

export const ListEndFooter = styled(ListFooter)`
  justify-content: flex-end;
`;
