import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--dark-gray);
`;

export const ImageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/iStock-1215384892.jpg");
  background-position: center;
  background-size: cover;
  opacity: 20%;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
