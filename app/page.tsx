<<<<<<< HEAD

import Footer from "@/components/Footer";
=======
import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "../components/Hero";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/lib/data";
import Clients from "@/components/Clients";
import MyExperieces from "@/components/MyExperieces";
import { MdPlayArrow } from "react-icons/md";
import { MyApproach } from "@/components/MyApproach";
import Ready from "@/components/Ready";
import Footer from "@/components/Footer";
import SwiperComp from "@/components/Swiper";
>>>>>>> dd10eae9ad18829bcc2ffecbe9e0c18de634238e
import Nav from "@/components/Nav";
import Features from "@/components/Features";
import LimitedOffers from "@/components/LimitedOffers";
import MostPopular from "@/components/MostPopular";
import Accessories from "@/components/Accessories";
import ChooseUs from "@/components/ChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer2 from "@/components/Footer2";
<<<<<<< HEAD
import { getLoggedInUser } from "@/lib/actions/user.action";

export default async function Home()  {

   const loggedIn = await getLoggedInUser();
  console.log( "loggedIn", loggedIn);
  return (
    <main className=" flex justify-center items-center flex-col   bg-gradient-to-br from-[#121212] to-[#121212] ">
      <Nav avatar={loggedIn?.avatars} username={loggedIn?.username}  />
=======

export default function Home() {
  return (
    <main className=" flex justify-center items-center flex-col   bg-gradient-to-br from-[#121212] to-[#121212] ">
      <Nav />
>>>>>>> dd10eae9ad18829bcc2ffecbe9e0c18de634238e
      <div className=" w-full   ">
        <Features />

        <LimitedOffers />

        <MostPopular />

        <Accessories />

        <ChooseUs />

        <Testimonials />

        <Footer />

        <Footer2 />

        {/* <FloatingNav navItems={navItems} /> */}

        {/* <Grid/> */}

        {/* <RecentProjects/>

         <Clients/>
        
       
         <MyExperieces/>
         
         <MyApproach/>

         <Ready/>
         <Footer/> */}
      </div>
    </main>
  );
}
