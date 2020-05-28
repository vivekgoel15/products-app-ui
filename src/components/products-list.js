import React, { Component } from "react";
import ProductService from "../services/product.service";
import CurrencyFormat from 'react-currency-format';
import { toast } from 'react-toastify';
import Loader from "./Loader";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.retrieveProducts = this.retrieveProducts.bind(this);
    // this.editProduct = this.editProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.state = {
      products: [],
      loading: false
    };
  }

  componentDidMount() {
    this.retrieveProducts();
  }

  retrieveProducts() {
    this.setState({loading: true});
    ProductService.getAll()
      .then(response => {
        this.setState({
          products: response.data,
          loading: false
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteProduct = (e) => {
    const id = e.target.getAttribute('data-item');
    ProductService.delete(id)
      .then(response => {
        ProductService.getAll()
          .then(response => {
            this.setState({
              products: response.data
            });
            console.log(response.data);
            toast("Product deleted successfully !");
          })
          .catch(e => {
            console.log(e);
          });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { products } = this.state;

    if (this.state.loading) return <Loader />;

    return (

        <table class="table table-hover">
            <thead>
            <tr>
                <td>Product Name</td>
                <td>Price</td>
                <td colspan="2">Actions</td>
            </tr>
            </thead>
        
            <tbody>
                
                    {products &&
                    products.map((product, index) => (
                        <tr>
                            <td>{ product.name }</td>
                            <td><CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'₹'} /></td>
                            <td>
                                <button key={index} data-item={product._id} onClick={() => { this.props.history.push('/products/'+product._id) }} class="btn-primary">Edit</button>
                            </td>
                            <td><button key={index} data-item={product._id} onClick={this.deleteProduct} class="btn-danger">Delete</button></td>
                        </tr>
                    ))}
                
            </tbody>
        </table>

    );
  }
}

