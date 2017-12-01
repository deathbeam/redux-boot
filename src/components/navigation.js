import R from 'ramda'
import React from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'
import { NavLink as ActiveLink } from 'redux-first-router-link'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

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
        <NavbarBrand tag={ActiveLink} to='/'>gear-osrs</NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={ActiveLink} to='/unknownpage'><FontAwesome name='gears' /> Somewhere</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default connect(
  (state) => state
)(Navigation)
