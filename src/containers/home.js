import React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/layout'

const Home = (state) => (
  <Layout>
    <h1>Welcome</h1>
  </Layout>
)

export default connect(
  (state) => state
)(Home)
