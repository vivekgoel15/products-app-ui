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
      price: "",
      error: ""
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
      error: ""
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value,
      error: ""
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
        toast("Product created successfully!");
        this.props.history.push('/products');
      })
      .catch(e => {
        this.setState({error: e.message});
      });
  }

  newProduct() {
    this.setState({
      name: "",
      price: ""
    });
  }

  render() {
    const { error } = this.state;
    return (
      <div className="submit-form">
          <div>
            <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
              {error}
            </div>
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