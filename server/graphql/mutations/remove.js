const GraphQLString = require('graphql').GraphQLString;
const GraphQLNonNull = require('graphql').GraphQLNonNull;
const ProductModel = require('../../models/product');
const productType = require('../types/product').productType;

exports.remove = {
  type: productType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(root, params) {
    const removedProduct = ProductModel.findByIdAndRemove(params.id).exec();
    if (!removedProduct) {
      throw new Error('Error');
    }
    return removedProduct;
  },
};
