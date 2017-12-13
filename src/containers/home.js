import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'
import Layout from '../components/layout'
import { latestCommitSelector } from '../redux/modules/git'

const renderCommit = (c) => {
  if (!c || !c.commit) return (<noscript />)
  console.log(c)

  return (
    <Alert className='text-center' color='info'>
      <b>Latest commit:</b>{' '}
      <a href={c.html_url}>{c.commit.message}</a> by {c.commit.author.name}{' '}
      <span className='text-muted'>{c.commit.committer.date}</span>
    </Alert>
  )
}

const Home = ({ commit }) => (
  <Layout>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <h1>Welcome</h1>
    <div className='text-center'>{renderCommit(commit)}</div>
  </Layout>
)

export default connect(
  (state, props) => ({ commit: latestCommitSelector(state, props) })
)(Home)
