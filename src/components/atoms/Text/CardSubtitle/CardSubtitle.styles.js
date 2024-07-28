import { commonText } from "@/styles/mixins/text.mixin";
import styled from "styled-components";

export const CardSubtitle = styled.h2`
  ${commonText({
    color: (props) =>
      props.variant === "primary" ? "var(--red)" : "var(--orange)",
    fontSize: "24px",
  })}
`;
