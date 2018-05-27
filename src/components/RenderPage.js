import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import ProductCreate from './ProductCreate';

class RenderPage extends Component {
  render() {
    const { filter } = this.props;
    switch (filter) {
      case 'update':
      case 'add':
        return (<ProductCreate />);
      default:
        return (<ProductList />);
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    filter,
  } = ownProps;

  return {
    filter,
  };
};

export default connect(mapStateToProps)(RenderPage);
