import  React, {useState} from 'react';
import {Navbar} from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/infoSection";
import {homeObjeOne, homeObjeThree, homeObjeTwo} from "../components/infoSection/Data";
import Services from "../components/Services";


const Home = () => {
          const [isOpen, setIsOpen] = useState(false);

          const toggle = () => {
              setIsOpen(!isOpen)
          }
    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection {...homeObjeOne}/>
        <InfoSection {...homeObjeTwo}/>
        <InfoSection {...homeObjeThree}/>
            <Services />
        </>

    )

}
export default Home;

