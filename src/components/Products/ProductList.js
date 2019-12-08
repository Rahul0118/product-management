import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ButtonToolbar, Button, Container, Table } from 'react-bootstrap';

import Pagination from "react-js-pagination";

import ProductsData from '../../data/products.json';

import HeaderNavContainer from '../../components/Header/header';

import FooterContainer from '../../components/Footer/footer';

import './ProductList.css';


class ProductList extends Component{

   constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    }

    // This is for the pagination page item count
    this.pageSize = 8;
    this.allProducts = ProductsData;
    this.products = this.allProducts.slice((this.state.activePage-1)*this.pageSize, this.state.activePage*this.pageSize);

    this.handleRequest(this.props);

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
    
    this.showProduct = this.showProduct.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  // This method is a custom implementation for table pagination control
  handlePageChange(pageNumber) {
    console.log(pageNumber)
    this.setState({activePage: pageNumber});
    this.products = this.allProducts.slice((pageNumber-1)*this.pageSize,pageNumber*this.pageSize);
  }

  // This method is to handle, classify request to the home page based on the action type sent
  handleRequest(request) {
    var event = request.location.state;
    if (event && event.type === "delete_product") {
      console.log("delete product");
      this.allProducts = this.allProducts.filter(function(item) {
          return item.id !== event.product.id
      });
      this.products = this.allProducts.slice((this.state.activePage-1)*this.pageSize, this.state.activePage*this.pageSize);
      
    }else if (event && event.type === "add_product"){
       console.log("add product");
       console.log(event.product);
       this.allProducts.push(event.product);
       
    }
  }

  showProduct(product) {
    // this.props.setState({name: product.name});
    this.props.history.push('products-details',{product: product});
  }

  addProduct(product) {
    this.props.history.push('product-add',{products: product});
  }

  componentDidMount() {
    console.log('aaaaaa');
  }

  render () {
      return (
      <div>
      <HeaderNavContainer />
      <div className="main_section">
        <Container>
          <div className="product_header">
            <h1>Products</h1>
            <ButtonToolbar>
              <Button variant="info" onClick={ () => this.addProduct(this.product) }>Add New Product</Button>
            </ButtonToolbar>
          </div>
          <div className="Products">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="sl">Product ID</th>
                <th>Product Image</th>
                <th>Product Title</th>
                <th>Product Description</th>
              </tr>
            </thead>
            <tbody>             
              {this.products.map((productDetail, index) => {
                return (
                     <tr onClick={ () => this.showProduct(productDetail) }>
                      <td className="sl">{"PROD000"+productDetail.id}</td>
                      <td className="image"><img src={productDetail.image || "http://igsagribusiness.com/products_imgs/dummy.jpg"} alt="" /></td>
                      <td className="title">{productDetail.title}</td>
                      <td>{productDetail.description}</td>
                    </tr>
                  )

              })}
            </tbody>
          </Table>
          <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={this.pageSize}
              totalItemsCount={this.allProducts.length}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
          />                    
          </div>
        </Container>
        </div>
      <FooterContainer />
      </div>
    );
  }
}


export default ProductList;
