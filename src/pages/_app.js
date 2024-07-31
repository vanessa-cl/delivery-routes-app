import Header from "@/components/organisms/Header/Header";
import GlobalStyle from "@/styles/GlobalStyle.styles";
import "@/styles/globalStyle.module.css";
import MapWrapperProvider from "@/context/MapWrapperContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MapWrapperProvider>
        <Component {...pageProps} />
      </MapWrapperProvider>
    </>
  );
}
