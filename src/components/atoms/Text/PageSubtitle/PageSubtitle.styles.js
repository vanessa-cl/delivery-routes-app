import { commonText } from "@/styles/mixins/text.mixin";
import styled from "styled-components";

export const PageSubtitle = styled.h2`
  ${commonText({ color: "var(--white)", fontSize: "24px" })}
  font-weight: 300;
`;
