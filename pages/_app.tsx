import "../styles/globals.css";
import type { AppProps } from "next/app";
import Topbar from "../components/Topbar";
// import FooterSection from '../components/FooterSection'
import Copyright from "../components/Copyright";
import Footerinfo from "../components/Footerinfo";
import BottomNavbar from "../components/BottomNavbar";
import { useRouter } from "next/router";
import Footer from "../components/mblviewComponents/Footer";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname === "/login") {
    return (
      <>
        {" "}
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
