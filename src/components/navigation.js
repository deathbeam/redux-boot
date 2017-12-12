import React from 'react'
import { NavLink as ActiveLink } from 'redux-first-router-link'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/fontawesome-free-solid'

class Navigation extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = { isOpen: false }
  }

  toggle () {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render () {
    return (
      <Navbar color='dark' dark toggleable>
        <NavbarToggler right onClick={this.toggle} />
        <NavbarBrand tag={ActiveLink} to='/'>redux-boot</NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={ActiveLink} to='/unknownpage'><FontAwesomeIcon icon={faCogs} /> Broken link</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Navigation
