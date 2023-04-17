import React from 'react'
import styles from '../style'
import { discount ,robot } from '../assets'
import GetStarted from './GetStarted';

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

      {/* Image With Dicount Copuon */}
      <div className='flex flex-row items-center  py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="discount" className='h-[32px] w-[32px]' />
        <p className={`${styles.paragraph} ml-4`}>
        <span className='text-white'>20% </span>
        Discount for {"  "} 
        <span className='text-white'>1 Month </span>
        Account
        </p> 
      </div>

      {/* //The Next Genration Method */}
      <div className='flex flex-row items-center w-full justify-between '>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[75px] leading-[55px]'>
          The Next <br className='sm:block hidden' />
          <span className='text-gradient'>Genration</span> {" "}
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted/>
        </div>
      </div>

      {/* Pargaraph Detail */}
      <h1 className='font-poppins font-semibold ss:text-[48px] text-[32px] text-white ss:leading-[65px] leading-[55px] w-full'>
        Payment Method
      </h1>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>Our teams of experts uses a methodology to ideantify the credit cards Most likely to fits yours needs. We examine annual percentage rates, annual fees.</p>
    </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[85%] h-[85%] relative z-[5]" />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>


      {/* For Phone Model */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
 </section>
)

export default Hero