import AnimatedText from '@/componants/AnimatedText'
import Layout from '@/componants/Layout'
import Head from 'next/head'
import React from 'react'

const project = () => {
  return (
    <>
       <Head>
                <title>Shubham's | Projects Page</title>
                <meta name='description' content='any description'/>
      </Head>
      
      <main>
        <Layout/>
          {/* <AnimatedText text="Imagination Trumps Knowledge!"/>
        </Layout> */}
      </main>
    </>
  )
}

export default project