import React, { Component } from "react";
import ProductService from "../services/product.service";
import { toast } from 'react-toastify';

export default class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);

    this.state = {
      currentProduct: {
        name: "",
        price: 0.0
      },
      error: ""
    };
  }

  componentDidMount() {
    this.getProduct(this.props.match.params.id);
  }

  onChangeName(e) {
    this.setState({error: ""});
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentProduct: {
          ...prevState.currentProduct,
          name: name
        }
      };
    });
  }

  onChangePrice(e) {
    this.setState({error: ""});
    const price = e.target.value;
    
    this.setState(prevState => ({
      currentProduct: {
        ...prevState.currentProduct,
        price: price
      }
    }));
  }

  getProduct(id) {
    ProductService.get(id)
      .then(response => {
        this.setState({
          currentProduct: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateProduct() {
    ProductService.update(
      this.state.currentProduct._id,
      this.state.currentProduct
    ).then(response => {
        toast("Product updated successfully!");
        this.props.history.push('/products');
    }).catch(e => {
      this.setState({error: e.message});
      console.log(e);
    });
  }

  render() {
    const { currentProduct, error } = this.state;
    return (
      <div>
          <div className="edit-form">
            <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
              {this.state.error}
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentProduct.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  value={currentProduct.price}
                  onChange={this.onChangePrice}
                />
              </div>
            </form>

            <button type="submit" className="btn-primary" onClick={this.updateProduct}>
              Update
            </button>
          </div>
      </div>
    );
  }
}
