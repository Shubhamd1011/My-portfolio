import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { Title } from 'chart.js'
import { useRouter } from 'next/router'
import { Twinkle_Star } from 'next/font/google'
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, InstagramIcon, WhatsAppIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'



const CustomLink = ({ href, Title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className = {`${className} relative group`}>
            {Title}
            <span className={
                `h-[1.5px] inline-block bg-dark absolute left-0 -bottom-0.5
            group-hover:w-full transition[width] ease duration-300 dark:bg-light
            ${router.asPath === href ? 'w-full' : 'w-0' }
            `
            }>&nbsp;</span>
        </Link>
    )
}


const CustomMobileLink = ({ href, Title, className = "", toggle}) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-3
        `} onClick={handleClick}>
            {Title}
            <span className={
                `h-[1.5px] inline-block bg-light absolute left-0 -bottom-0.5
            group-hover:w-full transition[width] ease duration-300 dark:bg-dark
            ${router.asPath === href ? 'w-full' : 'w-0' }
            `
            }>&nbsp;</span>
        </button>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();

    //  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () =>{
    setisOpen(!isOpen)
  }


  return (
      <header
          className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
          

          <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
              <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm  ${isOpen?'rotate-45 translate-y-1': '-translate-y-0.5'}`}></span>
              <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen?'opacity-0':'opacity-100'}`}></span>
              <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5  ${isOpen?'-rotate-45 -translate-y-1': 'translate-y-0.5'}`}></span>
          </button>


          <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
              <CustomLink href="/" Title="Home" className='mr-4' />
              <CustomLink href="/about"Title="About" className='mx-4'/>
              <CustomLink href="/projects" Title="Projects" className='mx-4'/>
              <CustomLink href="mailto:shubhamdevkamble707@gmail.com"Title="Contact Me" className='ml-4'/>
              
          </nav>


          <nav className='flex items-center justify-center flex-wrap'>
              <motion.a className='w-6 mx-3' href="https://www.linkedin.com/in/shubham-devkamble1011/" target={'_blank'}
                  whileHover={{ y: -2 }}
                  whileTap={{scale:0.9}}
              >
              <LinkedInIcon/>
              </motion.a>

              <motion.a href="https://github.com/Shubhamd1011" target={'_blank'}
                  className='w-6 mx-3'
                  whileHover={{ y: -2 }}
                  whileTap={{scale:0.9}}>
                  <GithubIcon/>
              </motion.a>

              <motion.a href="https://www.instagram.com/shubhamd_10_07/" target={'_blank'}
                  className='w-6 mx-3'
                  whileHover={{ y: -2 }}
                  whileTap={{scale:0.9}}>
                  <InstagramIcon className="text-pink-700" />
              </motion.a>    

               {/* <a href="https://x.com/ShubhamDev707" target={'_blank'}>
<WhatsAppIcon className="text-green-600" />
              </a> */}

              <motion.a href="https://x.com/ShubhamDev707" target={'_blank'}
                  className='w-6 mx-3'
                  whileHover={{ y: -2 }}
                  whileTap={{scale:0.9}}>
                  <TwitterIcon/>
              </motion.a>

              <motion.a href="https://in.pinterest.com/shubhamdevkamble/" target={'_blank'}
                  className='w-6 ml-3'
                  whileHover={{ y: -2 }}
                  whileTap={{scale:0.9}}>
                 <PinterestIcon/> 
              </motion.a>     
              


                 <button onClick={() => setMode(mode === "light" ? "dark" : "light")} 
            className={`ml-3 flex items-center justify-center rounded-full p-1
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
            `}
            >
              {
                mode === "dark" ?
                <SunIcon className={"fill-dark"} />
                : <MoonIcon className={"fill-dark"} />
              }
            </button>
          </nav>
          </div>



          {
              isOpen ?
                  
                  
                  <motion.div
                      initial={{ scale: 0, opacity:0, x:"-50%" , y:"-50%"}}
                      animate={{scale:1, opacity:1}}
                      className='min-w-[70vw] z-30 flex flex-col justify-between items-center
            fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
            '>
                <nav className='flex flex-col items-center justify-center'>
                  <CustomMobileLink href="/" Title="Home" className='' toggle={ handleClick} />
              <CustomMobileLink href="/about"Title="About" className='' toggle={ handleClick}/>
              <CustomMobileLink href="/projects" Title="Projects" className='' toggle={ handleClick}/>
              <CustomMobileLink href="/articles"Title="Contact Me" className='' toggle={ handleClick}/>
              
          </nav>


          <nav className='flex items-center justify-center flex-wrap mt-2'>
              <motion.a className='w-6 mx-3 sm:mx-1' href="https://www.linkedin.com/in/shubham-devkamble1011/" target={'_blank'}
                  whileHover={{ y: -2 }}
                  whileTap={{scale:0.9}}
              >
              <LinkedInIcon/>
              </motion.a>

              <motion.a href="https://github.com/Shubhamd1011" target={'_blank'}
                  className='w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark'
                  whileHover={{ y: -2 }}
                  whileTap={{scale:0.9}}>
                  <GithubIcon/>
              </motion.a>

              <motion.a href="https://www.instagram.com/shubhamd_10_07/" target={'_blank'}
                  className='w-6 mx-3 sm:mx-1'
                  whileHover={{ y: -2 }}
                  whileTap={{scale:0.9}}>
                  <InstagramIcon className="text-pink-700" />
              </motion.a>    

               {/* <a href="https://x.com/ShubhamDev707" target={'_blank'}>
<WhatsAppIcon className="text-green-600" />
              </a> */}

              <motion.a href="https://x.com/ShubhamDev707" target={'_blank'}
                  className='w-6 mx-3 sm:mx-1'
                  whileHover={{ y: -2 }}
                  whileTap={{scale:0.9}}>
                  <TwitterIcon/>
              </motion.a>

              <motion.a href="https://in.pinterest.com/shubhamdevkamble/" target={'_blank'}
                  className='w-6 ml-3 sm:mx-1'
                  whileHover={{ y: -2 }}
                  whileTap={{scale:0.9}}>
                 <PinterestIcon/> 
              </motion.a>     
              


                 <button onClick={() => setMode(mode === "light" ? "dark" : "light")} 
            className={`ml-3 flex items-center justify-center rounded-full p-1
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
            `}
            >
              {
                mode === "dark" ?
                <SunIcon className={"fill-dark"} />
                : <MoonIcon className={"fill-dark"} />
              }
            </button>
          </nav>
          </motion.div>
              
                  
                  :null
          }


        

          <div className='absolute left-[50%] top-2 translate-x-[-50%]'> 
                        <Logo/>

          </div>
          </header>
  )
}

export default NavBar