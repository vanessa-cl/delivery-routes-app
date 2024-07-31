import { commonText } from "@/styles/mixins/text.mixin";
import styled from "styled-components";

export const CardText = styled.p`
  ${commonText({ color: "var(--white)", fontSize: "18px" })}
`;
