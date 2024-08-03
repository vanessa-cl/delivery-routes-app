import Header from "@/components/organisms/Header/Header";
import GlobalStyle from "@/styles/GlobalStyle.styles";
import "@/styles/globalStyle.module.css";
import MapWrapperProvider from "@/context/MapWrapperContext";
import {
  Content,
  ImageBackground,
  ImageContainer,
} from "@/styles/generics/Image.styles";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <ImageContainer>
      <ToastContainer toastId={1} autoClose={5000} />
      <ImageBackground />
      <Content>
        <GlobalStyle />
        <Header />
        <MapWrapperProvider>
          <Component {...pageProps} />
        </MapWrapperProvider>
      </Content>
    </ImageContainer>
  );
}
