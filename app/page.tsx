import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "../components/Hero";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import {navItems} from '@/lib/data'
import Clients from "@/components/Clients";
import MyExperieces from "@/components/MyExperieces";
import { MdPlayArrow } from "react-icons/md";
import { MyApproach } from "@/components/MyApproach";
import Ready from "@/components/Ready";
import Footer from "@/components/Footer";
import SwiperComp from "@/components/Swiper";





export default function Home() {
  return (
    <main className=" flex justify-center items-center flex-col overflow-hidden mx-auto relative  bg-gradient-to-br from-[#030516] to-[#060713] sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
       
        <FloatingNav navItems={navItems} />
         <Hero />

         <Grid/>
        

         <RecentProjects/>

         <Clients/>
        
       
         <MyExperieces/>
         
         <MyApproach/>

         <Ready/>
         <Footer/>

           
      </div>
    </main>
  );
}
