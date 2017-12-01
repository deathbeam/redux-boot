import React from 'react'
import { NavLink } from 'redux-first-router-link'

const Error404 = (store) => (
  <div style={{
    backgroundImage: 'url(/img/cat.jpg)',
    display: 'table',
    width: '100%',
    height: 'calc(100% - 56px)',
    minHeight: 'calc(100% - 56px)',
    boxShadow: 'inset 0 0 5rem rgba(0,0,0,.5)'
  }}>
    <div style={{
      display: 'table-cell',
      verticalAlign: 'middle'
    }}>
      <div style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        fontWeight: 700
      }}>
        <h1>
          404
        </h1>
        <p className='lead'>
          Sorry, page was not found
          Click <NavLink to='/'>here</NavLink> to return to home page.
        </p>
      </div>
    </div>
  </div>
)

export default Error404
