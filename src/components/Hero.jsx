import {motion} from "framer-motion";
import {styles} from "../styles";
import {ComputersCanvas} from "./canvas";



const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
    <div className={`${styles.paddingX} absolute inset-0 top-[120px]
    max-w-7xl mx-auto flex flex-row items-start gap-5`}>
    <div className="flex flex-col justify-center items-center 
    mt-5">
    <div className="w-5 h-5 rounded-full bg-[#8147d8]"/>
    <div className="w-1 sm:h-80 h-40 violet-gradient" />
    </div>
    <div>
    <h1 className={`${styles.heroHeadText}  
    text-white`}> Hi, I'm <span className="text-8xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">Pranav </span>
    </h1>
    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
    I am a FullStack Developer and a Product Architect.
    <br className="sm:block hidden"/>
    I design and build web applications that solve,
    <br className="sm:block hidden"/>
    practical problems and provide tangible value.
    </p>
    </div>  
    </div>
    <ComputersCanvas />
    </section>
  )
}

export default Hero