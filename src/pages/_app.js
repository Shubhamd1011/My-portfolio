import Footer from '@/componants/Footer';
import NavBar from '@/componants/Navbar';
import '@/styles/globals.css'
import {Montserrat} from "next/font/google"
import Head from 'next/head';


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"

}
)
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main
        className={`${montserrat.variable} font-mont bg-light w-full dark:bg-dark min-h-screen`}
      >
        <NavBar/>
  
        <Component {...pageProps} />
        <Footer/>
    </main>
    </>
  )
}




