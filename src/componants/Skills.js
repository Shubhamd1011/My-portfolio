import React from 'react'
import { motion } from 'framer-motion'


const Skill = ({name,x,y}) => {
  
  return (
        <motion.div className='flex items-center justify-center rounded-full 
        font-semibold bg-dark
         text-light py-3 px-6 shadow-dark
          cursor-pointer absolute dark:text-dark dark:bg-light
          lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3
          xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold 
           '
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition:{duration:1.5} }}
      // transition={{ duration: 1.5 }}
      viewport={{once:true}}
    >
          {name}
        </motion.div>
  
  )
};

const Skills = () => {
  return (
      <>
          <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-5xl md:mt-32'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:[50vh] 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      md:bg-circularLightMd md:dark:bg-circularDarkMd'>
        <motion.div className='flex items-center justify-center rounded-full 
        font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
        whileHover={{scale:1.05}}>
          Web
        </motion.div>

        <Skill name="HTML" x="-32vh" y="0vw" />
        <Skill name="CSS" x="0vh" y="-9vw" />
        <Skill name="Javascript" x="35vh" y="0vw" />
        <Skill name="ReactJS" x="0vh" y="13vw" />
        <Skill name="NextJS" x="-33vh" y="-10vw" />
        <Skill name="NodeJS" x="67vh" y="0vw" />
        <Skill name="Bootstrap" x="38vh" y="-9vw" />
        <Skill name="Git & Git-Hub" x="0vh" y="-18vw" />
        <Skill name="SCSS" x="-35vh" y="10vw" />
        <Skill name="SQL" x="-67vh" y="0vw" />
        <Skill name="Web Design" x="35vh" y="10vw" />
        <Skill name="Postgre SQL" x="0vh" y="22vw" />
        <Skill name="Responsive Design" x="-59vh" y="-16vw" />
        
        
        
        

        
        
        
          </div>
      </>
  )
}

export default Skills