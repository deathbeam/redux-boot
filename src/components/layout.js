import React from 'react'
import { Container } from 'reactstrap'

const Layout = ({ children }) => (
  <Container fluid style={{ marginTop: 15, marginBottom: 15 }}>
    {children}
  </Container>
)

export default Layout
