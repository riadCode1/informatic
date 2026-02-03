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
import Nav from "@/components/Nav";
import Features from "@/components/Features";
import LimitedOffers from "@/components/LimitedOffers";
import MostPopular from "@/components/MostPopular";
import Accessories from "@/components/Accessories";
import ChooseUs from "@/components/ChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer2 from "@/components/Footer2";

export default function Home() {
  return (
    <main className=" flex justify-center items-center flex-col   bg-gradient-to-br from-[#121212] to-[#121212] ">
      <Nav />
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
