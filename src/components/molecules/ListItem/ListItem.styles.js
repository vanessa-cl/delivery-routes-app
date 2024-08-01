import { centerItemsBox } from "@/styles/mixins/box.mixin";
import styled from "styled-components";

export const ListItem = styled.li`
  width: 100%;
  height: auto;
  padding: 8px 16px;
  background-color: var(--gray);
  border-radius: 8px;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &.checked {
    background-color: var(--black) !important;
    border: ${(props) =>
      props.variant === "primary"
        ? "var(--red-border)"
        : "var(--orange-border)"};
  }

  &:hover {
    background-color: var(--black);
    border: ${(props) =>
      props.variant === "primary"
        ? "var(--red-border)"
        : "var(--orange-border)"};
  }

  &.bestRoute {
    background-color: var(--black) !important;
    border: var(--green-border);
  }
`;

export const ListItemFirstRow = styled.div`
  ${centerItemsBox}
  text-align: left;
  gap: 6px;
`;

export const ListItemRow = styled(ListItemFirstRow)`
  margin-bottom: 4px;
`;

export const ListItemBetweenRow = styled(ListItemRow)`
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4px;
`;

export const ListItemColumn = styled(ListItemRow)`
  align-items: flex-start;
  flex-direction: column;
`;

export const ListItemButtonWrapper = styled(ListItemBetweenRow)`
  margin-top: 8px;
`;
