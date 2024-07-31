import { commonText } from "@/styles/mixins/text.mixin";
import styled from "styled-components";

export const ListTitle = styled.p`
  ${commonText({
    color: "var(--white)",
    fontSize: "18px",
  })}
  text-align: left;
`;
