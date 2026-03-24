
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Features from "@/components/Features";
import LimitedOffers from "@/components/LimitedOffers";
import MostPopular from "@/components/MostPopular";
import Accessories from "@/components/Accessories";
import ChooseUs from "@/components/ChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer2 from "@/components/Footer2";
import { getLoggedInUser } from "@/lib/actions/user.action";

export default async function Home()  {

   const loggedIn = await getLoggedInUser();
  console.log( "loggedIn", loggedIn);
  return (
    <main className=" flex justify-center items-center flex-col   bg-gradient-to-br from-[#121212] to-[#121212] ">
      <Nav avatar={loggedIn?.avatars} username={loggedIn?.username}  />
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
