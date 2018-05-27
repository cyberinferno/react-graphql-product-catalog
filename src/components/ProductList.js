import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import MainLayout from './MainLayout';
import { listFetch, deleteProduct } from '../actions';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
  }

  componentDidMount() {
    this.props.listFetch();
    document.title = 'Product Catalog';
  }

  onUpdateClick(e) {
    localStorage.setItem('updateInfo', e.target.dataset.info);
  }

  onDeleteClick(e) {
    e.preventDefault();
    if (window.confirm('Are you sure?')) {
      this.props.deleteProduct(e.target.dataset.id);
    }
  }

  renderProducts() {
    const { loading, data } = this.props;
    let myData = {};
    if (data.data) {
      myData = data.data;
    }
    const { products } = myData;
    if (loading) {
      return (
        'Loading...'
      );
    }
    if (!products || typeof products === 'undefined' || products.length === 0) {
      return (
        'No products found. Please use add product feature in the menu'
      );
    }
    return (
      <Table bordered>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(item => (
            <tr key={item.id}>
              <td><img style={{ width: '60px', border: '1px solid #d8d5d5' }}src={item.url} alt={item.title} /></td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td><NavLink to={`/update?id=${item.id}`} data-info={JSON.stringify(item)} onClick={this.onUpdateClick}>Update</NavLink> | <a href="#" data-id={item.id} onClick={this.onDeleteClick}>Delete</a></td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  render() {
    return (
      <MainLayout>
        <div>
          <h2 style={{ textAlign: 'center' }}>Product Catalog</h2>
          {this.renderProducts()}
        </div>
      </MainLayout>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    loading,
    data,
  } = state.productList;

  return {
    loading,
    data,
  };
};

export default connect(
  mapStateToProps,
  {
    listFetch,
    deleteProduct,
  },
)(ProductList);
