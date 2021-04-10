import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>ChrisDevCode</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header title='Chris Achinga | chrisdevcode' />
        <p className='description'>
          Documenting My Journey
        </p>
      </main>

      <Footer />
    </div>
  )
}
