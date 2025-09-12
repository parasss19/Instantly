import Accordian from '../components/Accordian'
import Chrome from '../assets/Chrome.svg';
import netflix from '../assets/netflix.svg';
import notion from '../assets/notion.svg'
// import { ArcadeEmbed } from '../components/ArcadeEmbed';
import { motion } from "framer-motion";
import FeaturesBento from '../components/FeaturesBento';
import HowToUse from '../components/HowToUse';
import zap from '../assets/zap.svg'


const Home = () => {

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="my-20 mb-8 font-[Geist] flex flex-col items-center justify-center sm:px-8 text-center"
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative sm:my- px-4 sm:px-8 flex flex-col items-center font-[Geist]">
          {/* badge */}
          <div className="font-custom-font inline-flex items-center mb-3 py-0.5 px-3 border border-white/40 rounded-full  shadow-md hover:shadow-lg hover:-translate-y-1 transition group sm:px-4 sm:py-1">
            <p className="text-xs sm:text-sm text-white font-light flex gap-2 items-center justify-center">
               Summarize Any Article in Seconds
              <img className='inline' width="20" height="20" src={zap} alt="clock"/>
            </p>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-3xl sm:text-5xl font-medium leading-tight text-white">
            Turn Long Reads Into Key Insights with your personal {" "}
            <span className='font_instrument italic font-light text-blue-300'>AI Reading Assistant</span>{" "}
            ✨
          </h1>

          {/* Subheading */}
          <div className="text-center">
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-white max-w-2xl mx-auto">
              Whether you’re browsing news, researching for work, or catching up on blogs, {" "}
              <span className='font_instrument text-white bg-yellow-400/40 rounded-lg px-2 py-0.5'>Instantly</span>{" "}
              gives you concise summaries in seconds helping you save hours every week without missing the key details.
            </p>
          </div>

          {/* CTA btn*/}
          <div className="mt-8">
            <button
              onClick={() => navigate("#")}
              className="cursor-pointer bg-black/60  text-yellow-300 text-sm sm:text-lg px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-md transition-transform duration-150 active:scale-95"
            >
              <span className='tracking-wider flex items-center font-light justify-center gap-2'>
                Add to <img src={Chrome} alt="chrome" className='w-5 h-5'/> its's Free
              </span>
            </button>
          </div>

          {/* Product Preview demo video */}
          <div className="mt-12 flex justify-center items-center w-full max-w-[95%] sm:max-w-[95%] md:max-w-[90%] mx-auto">
            {/* <ArcadeEmbed /> */}
          </div>

        </div>
      </motion.div>

      {/* How to use video*/}
      {/* <div className='flex flex-col gap-4 '>
        <ArcadeEmbed/>
        <span className='text-sm font-bold text-white/90 bg-gray-600 w-fit mx-auto rounded-lg px-2 py-1'>Interactive Tutorial</span>
      </div> */}

      {/* Features */}
      <FeaturesBento/>

      {/* How to use steps */}
      <HowToUse/>
      
      {/* Accordian */}
      <Accordian/>
    </>

  )
}

export default Home