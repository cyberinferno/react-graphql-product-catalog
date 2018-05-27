const GraphQLString = require('graphql').GraphQLString;
const GraphQLFloat = require('graphql').GraphQLFloat;
const GraphQLInt = require('graphql').GraphQLInt;
const GraphQLNonNull = require('graphql').GraphQLNonNull;
const ProductModel = require('../../models/product');
const productType = require('../types/product').productType;

exports.add = {
  type: productType,
  args: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    quantity: {
      type: GraphQLInt,
    },
    url: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
  },
  resolve(root, params) {
    const pModel = new ProductModel(params);
    const newProduct = pModel.save();
    if (!newProduct) {
      throw new Error('Error');
    }
    return newProduct;
  },
};
