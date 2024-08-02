import Header from "@/components/organisms/Header/Header";
import GlobalStyle from "@/styles/GlobalStyle.styles";
import "@/styles/globalStyle.module.css";
import MapWrapperProvider from "@/context/MapWrapperContext";
import {
  Content,
  ImageBackground,
  ImageContainer,
  ImageFilter,
} from "@/styles/generics/Image.styles";

export default function App({ Component, pageProps }) {
  return (
    <ImageContainer>
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
