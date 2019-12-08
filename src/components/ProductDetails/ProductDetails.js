import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ButtonToolbar, Button, Col, Card, Container, Row } from 'react-bootstrap';

import { confirmAlert } from 'react-confirm-alert';

import HeaderNavContainer from '../../components/Header/header';

import FooterContainer from '../../components/Footer/footer';

import './ProductDetails.css';

import 'react-confirm-alert/src/react-confirm-alert.css';



class ProductDetails  extends Component{

	submit = () => {
	    confirmAlert({
	      title: 'Confirm to submit',
	      message: 'Are you sure to delete this product?',
	      buttons: [
	        {
	          label: 'Yes',
	          onClick: () => this.deleteProduct(this.product)
	        },
	        {
	          label: 'No',
	          onClick: () => console.log("clicked no")
	        }
	      ]
	    });
	};

	constructor(props) {
    	super(props);
    	this.product = this.props.location.state.product;
    	console.log(this.product);
    	this.editProduct = this.editProduct.bind(this);
    	this.deleteProduct = this.deleteProduct.bind(this);
	}

	editProduct(product) {
    	// this.props.setState({name: product.name});
    	this.props.history.push('product-edit',{product: this.product});
  	}

  	deleteProduct(product) {
  		console.log(this.products);
    	// this.props.setState({name: product.name});
    	this.props.history.push('products',{product: this.product, type: "delete_product"});
  	}

  	imageUpload = (e) => {
        const file = e.target.files[0];
        getBase64(file).then(base64 => {
	        this.product.image = base64;
	        console.log(base64)
	      });
  	};

  	render () {
	    return (

	      <div>

	      	<HeaderNavContainer />
				<div className="products_gallery">
			        <Container>
			        	<h2>Product Details</h2>
			        	<ButtonToolbar>
	  						<Button variant="info" onClick={ () => this.editProduct(this.product) }>Edit</Button>
				        	<Button variant="danger" onClick={this.submit}>Delete</Button>
	  					</ButtonToolbar>
		                <Card>
				          	<Row>
			                    <Col md="5" sm="5">
			                      <Card.Img variant="top" src={this.product.image} />
			                    </Col> 
			                   	<Col md="7" sm="7">
			                      <Card.Body>
			                        <Card.Title>{this.product.title}</Card.Title>
			                        <Card.Text>
			                          {this.product.description}
			                        </Card.Text>
			                      </Card.Body>
			                  	</Col>
				         	</Row>
	                    </Card>
		        	</Container>
		      	</div>
		    <FooterContainer />
		  </div>
		);
  	}
}

const getBase64 = (file) => {
  return new Promise((resolve,reject) => {
     const reader = new FileReader();
     reader.onload = () => resolve(reader.result);
     reader.onerror = error => reject(error);
     reader.readAsDataURL(file);
  });
}

export default ProductDetails;