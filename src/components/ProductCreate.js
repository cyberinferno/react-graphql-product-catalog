import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MainLayout from './MainLayout';
import {
  titleChanged,
  descriptionChanged,
  urlChanged,
  priceChanged,
  quantityChanged,
  saveProduct,
  idChanged,
  resetForm,
} from '../actions';

class ProductCreate extends Component {
  constructor(props) {
    super(props);

    this.titleChanged = this.titleChanged.bind(this);
    this.descriptionChanged = this.descriptionChanged.bind(this);
    this.urlChanged = this.urlChanged.bind(this);
    this.priceChanged = this.priceChanged.bind(this);
    this.quantityChanged = this.quantityChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    if (window.location.pathname === '/update') {
      const updateInfo = localStorage.getItem('updateInfo');
      if (updateInfo === null) {
        window.location = '/';
      } else {
        try {
          const data = JSON.parse(updateInfo);
          const {
            title,
            quantity,
            price,
            description,
            url,
            id,
          } = data;
          this.props.titleChanged(title);
          this.props.descriptionChanged(description);
          this.props.urlChanged(url);
          this.props.priceChanged(price);
          this.props.quantityChanged(quantity);
          this.props.idChanged(id);
        } catch (e) {
          window.location = '/';
        }
      }
    } else {
      this.props.resetForm();
    }
  }

  componentDidMount() {
    if (window.location.pathname === '/update') {
      document.title = 'Update Product';
    } else {
      document.title = 'Create Product';
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const { title, quantity, price, description, url, id } = this.props;
    this.props.saveProduct(title, quantity, price, description, url, id);
  }

  titleChanged(e) {
    this.props.titleChanged(e.target.value);
  }

  descriptionChanged(e) {
    this.props.descriptionChanged(e.target.value);
  }

  urlChanged(e) {
    this.props.urlChanged(e.target.value);
  }

  priceChanged(e) {
    this.props.priceChanged(e.target.value);
  }

  quantityChanged(e) {
    this.props.quantityChanged(e.target.value);
  }

  render() {
    return (
      <MainLayout>
        <Row>
          <div className="col-md-6 col-sm-12">
            <h2>Add Product</h2>
            <Form style={{ marginTop: '20px' }} onSubmit={this.onSubmit}>
              <p className="text-danger">{this.props.error}</p>
              <FormGroup row>
                <Label for="title" sm={2}>Title</Label>
                <Col sm={10}>
                  <Input type="text" name="title" id="title" placeholder="Title" value={this.props.title} onChange={this.titleChanged} />
                  <FormText color="danger">
                    {this.props.titleError}
                  </FormText>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="price" sm={2}>Price</Label>
                <Col sm={10}>
                  <Input type="number" step="0.01" min="1" name="price" id="price" placeholder="Price" value={this.props.price} onChange={this.priceChanged} />
                  <FormText color="danger">
                    {this.props.priceError}
                  </FormText>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="quantity" sm={2}>Quantity</Label>
                <Col sm={10}>
                  <Input type="number" step="1" min="0" name="quantity" id="quantity" placeholder="Quantity" value={this.props.quantity} onChange={this.quantityChanged} />
                  <FormText color="danger">
                    {this.props.quantityError}
                  </FormText>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="description" sm={2}>Description</Label>
                <Col sm={10}>
                  <Input type="textarea" name="description" id="description" placeholder="Description" value={this.props.description} onChange={this.descriptionChanged} />
                  <FormText color="danger">
                    {this.props.descriptionError}
                  </FormText>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="url" sm={2}>Image</Label>
                <Col sm={10}>
                  <Input type="text" name="url" id="url" placeholder="Image URL" value={this.props.url} onChange={this.urlChanged} />
                  <FormText color="danger">
                    {this.props.urlError}
                  </FormText>
                </Col>
              </FormGroup>
              <Col sm={6} className="offset-sm-3">
                <Button color="primary">Save</Button>&nbsp;&nbsp;&nbsp;
                <NavLink className="btn btn-secondary" to="/" >Cancel</NavLink>
              </Col>
            </Form>
          </div>
        </Row>
      </MainLayout>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    title,
    titleError,
    quantity,
    quantityError,
    description,
    descriptionError,
    url,
    urlError,
    price,
    priceError,
    error,
    id,
  } = state.product;

  return {
    title,
    titleError,
    quantity,
    quantityError,
    description,
    descriptionError,
    url,
    urlError,
    price,
    priceError,
    error,
    id,
  };
};

export default connect(
  mapStateToProps,
  {
    titleChanged,
    descriptionChanged,
    urlChanged,
    priceChanged,
    quantityChanged,
    saveProduct,
    idChanged,
    resetForm,
  },
)(ProductCreate);
