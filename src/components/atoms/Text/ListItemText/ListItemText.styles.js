import { commonText } from "@/styles/mixins/text.mixin";
import styled from "styled-components";

export const ListItemText = styled.p`
  color: var(--white);
  ${commonText({
    color: (props) => {
      switch (props.variant) {
        case "primary":
          return "var(--red)";
        case "secondary":
          return "var(--orange)";
        default:
          return "var(--white)";
      }
    },
    fontSize: "16px",
  })}
`;
