import Head from 'next/head'

const Meta = ({ titleTage }) => {
  return (
    <Head>
      <title>{titleTage}</title>
      {/* <link rel='icon' href='/favicon.ico' /> */}
      <meta property='og:url' content='https://chrisdevcode.netlify.app/' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Chris Achinga | ChrisDevCode' />
      <meta
        property='og:description'
        content='Chris Achinga, A competent software developer'
      />
      <meta
        property='og:image'
        content='https://source.unsplash.com/6bKpHAun4d8'
      />
    </Head>
  )
}

export default Meta
