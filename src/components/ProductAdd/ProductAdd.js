import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Col, Form, Row } from 'react-bootstrap';


import HeaderNavContainer from '../../components/Header/header';
import FooterContainer from '../../components/Footer/footer';

import './ProductAdd.css';

class ProductAdd extends Component {

	constructor(props) {
		super(props);
		this.onAdd = this.onAdd.bind(this);
		this.imageUpload = this.imageUpload.bind(this);
		this.state = {
	      file: null
	    }
	}

	onAdd(e) {
        e.preventDefault();
        var title = this.title.value;
        var description = this.description.value;
        var image = this.image;

        var random_id = 100 + Math.round(Math.random() * 10000);

        this.product = {id: random_id, title: title, description: description, image: image};

        console.log(this.product);

        this.props.history.push('products',{product: this.product, type: "add_product"});
    }

    imageUpload = (e) => {
        const file = e.target.files[0];
        getBase64(file).then(base64 => {
	        this.image = base64;
	        localStorage["fileBase64"] = this.image;
	      	console.log(this.product);
	    });
	    this.setState({
	      file: URL.createObjectURL(e.target.files[0])
	    });
  	};


	render () {
		return (
			<div>
				<HeaderNavContainer />
				<div className="Addsection">
					<Container>
						<Row>
							<Col md="6" sm="6">
								<h2>Add Product Details</h2>
								<Form>
								  <Form.Group controlId="postTitle">
								    <Form.Label>Post Title</Form.Label>
								    <Form.Control type="text" placeholder="Enter the Product Title Here"  ref={(c) => this.title = c} name="title" />
								  </Form.Group>	
								  <Form.Group controlId="postDesctiption">
								    <Form.Label>Post Desctiption</Form.Label>
								    <Form.Control as="textarea" rows="3" placeholder="Enter the Product Desctiption Here" ref={(c) => this.description = c} name="description" />
								  </Form.Group>
								  <Form.Group controlId="postImage">								  
								    <Form.Label>Post Image</Form.Label>
								    <Form.Check type="file" id="imageFile" name='imageFile' onChange={this.imageUpload} />
								    <img src={this.state.file} alt="" />
								  </Form.Group>
								  <Button variant="primary" type="submit" onClick={this.onAdd}>
								    Submit
								  </Button>
								</Form>
							</Col>
						</Row>
					</Container>
				</div>
				<FooterContainer />
			</div>
		)
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

export default ProductAdd;