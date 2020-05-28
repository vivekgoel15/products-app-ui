import React, { Component } from "react";
import ProductService from "../services/product.service";
import { toast } from 'react-toastify';

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.newProduct = this.newProduct.bind(this);

    this.state = {
      name: "",
      price: ""
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  saveProduct() {
    var data = {
      name: this.state.name,
      price: this.state.price
    };

    ProductService.create(data)
      .then(response => {
        this.setState({
          name: response.data.name,
          price: response.data.price
        });
        console.log(response.data);
        toast("Product created successfully!");
      })
      .catch(e => {
        console.log(e);
      });
      this.props.history.push('/products');
  }

  newProduct() {
    this.setState({
      name: "",
      price: ""
    });
  }

  render() {
    return (
      <div className="submit-form">
          <div>
            <div className="form-group">
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.price}
                onChange={this.onChangePrice}
                name="description"
              />
            </div>

            <button onClick={this.saveProduct} className="btn-info">
              Submit
            </button>
          </div>
      </div>
    );
  }
}