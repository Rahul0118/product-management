import React, { Component } from 'react';

import { Container} from 'react-bootstrap';

import './footer.css';

class FooterContainer extends Component {
	render() {
		return (
			<div className="footer_section">
				<Container>
					<p>Product Mangement © 2020</p>
				</Container>
			</div>
		);
	}
}

export default FooterContainer;