import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdsBanner from "../components/AdsBanner";
import Airpurify from "../components/Airpurify";
import ApplianceRepair from "../components/ApplianceRepair";
import Banner from "../components/Banner";
import BottomNavbar from "../components/BottomNavbar";
import CarpenterService from "../components/CarpenterService";
import Categories from "../components/Categories";
import CCTV from "../components/CCTV";
import CleaningPestControl from "../components/CleaningPestControl";
// import ClientFeedback from '../components/ClientFeedback'
import ComputerPrinter from "../components/ComputerPrinter";
import Copyright from "../components/Copyright";
// import Copyright from '../components/Copyright'
// import Description from '../components/Description'
import Description2 from "../components/Description2";
import DownloadOurApp from "../components/DownloadOurApp";
import DroneRepair from "../components/DroneRepair";
import ElectricianPlumbers from "../components/ElectricianPlumbers";
import Footerinfo from "../components/Footerinfo";
import Footer from "../components/mblviewComponents/Footer";
import Products from "../components/mblviewComponents/Products";
// import FooterSection from '../components/FooterSection'
import MedicalEquipments from "../components/MedicalEquipments";
import MobileTabs from "../components/MobileTabs";
import Number from "../components/Number";
import OurClients from "../components/OurClients";
import PopularBrands from "../components/PopularBrands";
import SmartCareBlogs from "../components/SmartCareBlogs";
import Topbar from "../components/Topbar";
// import Topbar from '../components/Topbar'
import WarantyProducts from "../components/WarantyProducts";
import { getAllServices } from "../redux/allServices";
import { baseUrl } from "./api/baseUrl";

const Smartcare: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        `${baseUrl}/multiservice/masterconfig/publicmasterconfig/getSliderListpop1`
      )
      .then((response: any) => {
        let data = response.data.brands;
        console.log(data);
        dispatch(getAllServices(data));
      });
  }, []);
  return (
    <div className="">
      <Head>
        <title>Smart Care</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* topbar */}
      <Topbar />
      {/* banner */}
      <Banner />
      {/* categories */}
      <Categories />
      <Products />
      {/* ApplianceRepair */}
      <ApplianceRepair />
      {/* popularBrands */}
      <PopularBrands />
      {/* Numbers */}
      <Number />
      {/* Description */}
      {/* <Description /> */}
      {/* WarantyProducts */}
      <WarantyProducts />
      {/* eletricianPlumbers */}
      <ElectricianPlumbers />
      {/* Air Purify */}
      <Airpurify />
      {/* ads banner */}
      <AdsBanner />
      {/* mobile& tabs */}
      <MobileTabs />
      {/* cctv service */}
      <CCTV />
      {/* computer printer */}
      <ComputerPrinter />
      {/* medical Equipments */}
      <MedicalEquipments />
      {/* Drone Repair */}
      <DroneRepair />
      {/* carpenterService */}
      <CarpenterService />
      {/* Cleaning Pest Control */}
      <CleaningPestControl />
      {/* description 2 */}
      <Description2 />
      {/* OurClients */}
      <OurClients />
      {/* what our client says */}
      {/* <ClientFeedback /> */}
      {/* Download our app */}
      <SmartCareBlogs />
      <DownloadOurApp />
      {/* Bottom navbar */}
      <BottomNavbar />
      {/* footerSection */}
      {/* <FooterSection /> */}
      {/* copyright */}
      <Footerinfo />
      <Copyright />
      <Footer />
    </div>
  );
};

export default Smartcare;
