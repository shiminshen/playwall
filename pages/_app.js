import React from 'react'
import Layout from '../src/components/common/Layout/MainLayout'

const App = ({ Component, pageProps  }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
