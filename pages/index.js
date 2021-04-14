import Meta from '@components/Meta'
import Menu from '@components/Menu'
import Header from '@components/Header'
import Footer from '@components/Footer'

const Home = () => {
  return (
    <>
      <Meta titleTage='ChrisDevCode' />
      {/* <Menu /> */}
      <main>
        <Header title='Chris Achinga | chrisdevcode' />
        <p className='description'>Documenting My Journey</p>
      </main>
      <Footer />
    </>
  )
}

export default Home