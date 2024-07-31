import { commonText } from "@/styles/mixins/text.mixin";
import styled from "styled-components";

export const PageSubtitle = styled.h2`
  ${commonText({ color: "var(--white)", fontSize: "20px" })}
  font-weight: 300;
`;
