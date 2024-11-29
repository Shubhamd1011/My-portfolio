import React, { useRef } from 'react'
import { motion, useScroll} from 'framer-motion'
import LiIcon from './LiIcon'



const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
    <LiIcon reference={ref} />
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{duration:0.5, type:"spring"}}
    
    >
      <h3 className='capitalize font-bold text-2xl sm:text-xl xs: text-light/75 xs:text-sm'>{type}</h3>
      <span className='capitalize font-medium text-dark/75'>
        {time} | {place}
      </span>
      <p className='font-medium w-full md:text-sm'>
        {info}
      </p>
    </motion.div>


  </li>
}

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset:["start end", "center start"]
    }
  )
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl w-full text-center mb-32 md:text-6xl xs:text-4xl md:mb-16'>
        Education
      </h2>

      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{scaleY: scrollYProgress }}
          className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
        

          <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details
            
              type="Bachelor Of Technology In Computer Science"
              
              time=" 2020-2024"
              
              place="Gramin College Of Engineering Vishnupuri,Nanded"
              
              info="Computer engineering is the study of the science and technology of designing, building, and maintaining the hardware and software components of computers and computer-controlled equipment. It combines the principles of electrical engineering and computer science"
              
          />
          

          <Details
            
              type="Fullstack Web Devlopment Classes"
              
              time="2024"
              
              place="Skillected Koregaon Park, Pune."
              
              info="This course teaches MERN Stack.In this cource we learn HTML, CSS, JAVASCRIPT, NODE and many more treanding technologies."
              
            />

                <Details
            
              type="Higher Secondary Certificate (HSC) Science"
              
              time=" 2019-2020"
              
              place="Manik Prabhu Vidhyalaya Ambulga, Kandhar."
              
              info="Focuses on Physics, Chemistry, Biology, and Math, preparing for engineering, medical, or pure science studies."
              
            />

                <Details
            
              type="Secondary School Certificate (SSC)"
              
              time=" 2017-2018"
              
              place="Shri Shivaji High School, Kandhar"
              
              info="In Maharashtra SSC (10th grade), students study core subjects like Mathematics, Science, Social Science (History, Geography, Civics, Economics), English, and a regional language (Marathi or Hindi). The curriculum provides a foundation in basic sciences, mathematics, and humanities, preparing students for higher secondary education."
              
            />
      </ul>
      </div>
    
      </div>
  )
}

export default Education