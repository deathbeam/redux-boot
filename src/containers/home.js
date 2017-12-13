import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import Commit from '../components/commit'
import Layout from '../components/layout'
import { latestCommitSelector } from '../redux/modules/git'

const Home = ({ commit }) => (
  <Layout>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <h1>Welcome</h1>
    <Commit {...commit} />
  </Layout>
)

export default connect(
  (state, props) => ({ commit: latestCommitSelector(state, props) })
)(Home)
