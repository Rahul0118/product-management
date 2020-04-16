import React, { Component } from 'react';

import { Container, Navbar, Nav } from 'react-bootstrap';

import './header.css';


class HeaderNavContainer extends Component {
	render() {
		return (
			<div className="header_section">
				<Container>
					<Navbar bg="light" expand="sm">
					  <Navbar.Brand href="/">Product Management</Navbar.Brand>
					  <Navbar.Toggle aria-controls="basic-navbar-nav" />
					  <Navbar.Collapse id="basic-navbar-nav">
					    <Nav className="ml-auto">
					      <Nav.Link href="/">Home</Nav.Link>
					      <Nav.Link href="/products">Products</Nav.Link>
					    </Nav>
					  </Navbar.Collapse>
					</Navbar>
				</Container>
			</div>
		);
	}
}

export default HeaderNavContainer;