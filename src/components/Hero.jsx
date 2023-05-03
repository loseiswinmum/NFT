import { useState, useEffect } from "react";
import styles from '../style';
import { discount, robot } from '../assets';
//import { robot2 } from '../assets';
import GetStarted from './GetStarted';


const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  window.addEventListener("resize", handleResize);
  handleResize();
  return () => window.removeEventListener("resize", handleResize);
  }, []);
return(
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4
        bg-discount-gradient rounded rouned-[10px] mb-2">
          <img src={discount} alt="discount"
          className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>Chimutan </span>is a  {" "}
          <span className='text-white'>japanese </span>bunny
          </p>
        </div>

        <div className='flex flex-row justify-between item-center w-full'>
          <h1 className='text-pink-gradient flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]
          leading-[75px]'>
            {/*kawaii
            <br className='sm:block hidden'/> 
            {" "}*/} 
            <span className='text-gradient'>kawaii</span> 
            {" "} 
          </h1>
          <div className='flex-1 ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />

          </div>
        </div>

        <h1 className='text-pink-gradient font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px]
          leading-[75px] w-full'>
            Rainbow Chimutan
        </h1>
        <p style={{ color: 'orange' }}className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Chimutan is a Japanese bunny who likes food, art, exercise & travel.
She enjoys life and loves sharing her interests with others.
Chimutan is no doubt a KOL for "Kawaii" culture.
        {/*Break through the bottleneck of science & technology, reshape the future life.*/}
        </p>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      {//isMobile ? (
       // <video className="w-[100%] h-auto relative z-5" autoPlay loop muted>
       //   <source src={robot2} alt="robot2" className="w-[100%] h-[auto] relative z-10" />
       // </video>
      //) : (
        <img src={robot} alt="robot" className="w-[70%] h-[auto] relative z-10" />
      //)
      }
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[0] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
      </div>
    </section>
  )
}


export default Hero