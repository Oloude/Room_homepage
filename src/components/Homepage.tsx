import Content from "./Content"
import Image from "./Image"
import data from "../data"
import arrowIcon from '../assets/icon-arrow.svg'
import aboutDark from '../assets/image-about-dark.jpg'
import aboutLight from '../assets/image-about-light.jpg'
import HeroImage from "./HeroImage"
import CarouselButton from "./CarouselButton"
import { useState } from "react"

 

function Homepage() {
    const [currentNum, setCurrentNum] = useState(1)

    function handlePrev(){
        setCurrentNum(prev => prev === 1 ? 3 : prev -1)
    }

    function handleNext(){
        setCurrentNum(prev => prev === 3 ? 1 : prev + 1)
    }
  return (
    <section className="grid gird-cols-1 grid-rows-[auto_auto]">
        <div className="grid grid-cols-1 grid-rows-[auto_25rem] lg:grid-cols-5 lg:grid-rows-1">
            <div className="relative lg:col-span-3">
            <HeroImage imgMobile={ data[currentNum - 1].mobile} imgDesktop={data[currentNum - 1].desktop }/>
            <CarouselButton id={1} handlePrev={handlePrev} handleNext={handleNext} />
            </div>
          
            <Content name="hero">
                <h1 className="text-4xl font-bold text-black mb-4">{data[currentNum - 1].title}</h1>
                <p className="text-darkGray text-base mb-10 lg:mb-7">{data[currentNum - 1].desc }</p>
                <button className="flex text-black hover:text-darkGray text-base uppercase gap-2 items-center tracking-[10px]">Shop now <img src={arrowIcon} alt="" /></button>
                <CarouselButton id={2} handlePrev={handlePrev} handleNext={handleNext}/>
            </Content>
        </div>
        <div className="grid grid-cols-1 grid-rows-[30rem_20rem_30rem] lg:grid-cols-3 lg:grid-rows-1">
            <Image img={aboutDark }/>
        <Content name='about'>
                <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-[5px]">About our furniture </h3>
                <p className="text-darkGray text-base  ">Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
            </Content>
            <Image img={ aboutLight}/>
        </div>
    </section>
  )
}

export default Homepage