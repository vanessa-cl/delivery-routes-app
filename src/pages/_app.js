import Header from "@/components/organisms/Header/Header";
import GlobalStyle from "@/styles/GlobalStyle.styles";
import "@/styles/globalStyle.module.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
