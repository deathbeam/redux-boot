import React from 'react'
import { Alert } from 'reactstrap'

const Commit = (commit) => {
  if (!commit || !commit.commit) return (<noscript />)

  const { commit: { message, author: { name }, committer: { date } } } = commit

  return (
    <Alert className='text-center' color='info'>
      <b>Latest commit:</b>{' '}
      <a href={commit.html_url}>{message}</a> by {name}{' '}
      <span className='text-muted'>{date}</span>
    </Alert>
  )
}

export default Commit
