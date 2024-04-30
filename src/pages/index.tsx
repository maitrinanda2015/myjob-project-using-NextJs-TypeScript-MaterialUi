// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

// import Otpdemo from "./otpdemo";

// import Userotp from "./userotp";

// import Demotextfield from "./demotextfield";


// import Demo from "./demo";






// import Login from "./login";

import Demmultipletextfield from "./demmultipletextfield";
import Jobdetailspage from "./jobdetailspage";
import Organizationdashboard from "./organizationdashboard";
import Organizationsignup from "./organizationsignup";
import Profile from "./profile";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Login/> */}
      {/* <Userotp/> */}
      {/* <Otpdemo/> */}
      <Organizationsignup/>
      <Profile/>
      {/* <Demo/> */}
      <Jobdetailspage/>
      {/* <Demotextfield/> */}
      <Organizationdashboard/>
      <Demmultipletextfield/>
    </>
  );
}
