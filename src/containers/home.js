import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

const Home = (state) => (
  <Layout>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <h1>Welcome</h1>
  </Layout>
)

export default Home
