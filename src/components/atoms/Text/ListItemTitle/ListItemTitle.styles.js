import { commonText } from "@/styles/mixins/text.mixin";
import styled from "styled-components";

export const ListItemTitle = styled.h3`
  ${commonText({
    color: (props) =>
      props.variant === "primary" ? "var(--red)" : "var(--orange)",
    fontSize: "18px",
  })}
`;
