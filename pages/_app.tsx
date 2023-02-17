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
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
// import persistStore from "redux-persist/es/persistStore";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname === "/login") {
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }

  // let persistor = persistStore(store);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
