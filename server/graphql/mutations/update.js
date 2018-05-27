const GraphQLString = require('graphql').GraphQLString;
const GraphQLFloat = require('graphql').GraphQLFloat;
const GraphQLInt = require('graphql').GraphQLInt;
const GraphQLNonNull = require('graphql').GraphQLNonNull;
const ProductModel = require('../../models/product');
const productType = require('../types/product').productType;

exports.update = {
  type: productType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString),
    },
    title: {
      name: 'title',
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      name: 'price',
      type: new GraphQLNonNull(GraphQLFloat),
    },
    quantity: {
      name: 'quantity',
      type: GraphQLInt,
    },
    url: {
      name: 'url',
      type: GraphQLString,
    },
    description: {
      name: 'description',
      type: GraphQLString,
    },
  },
  resolve(root, params) {
    return ProductModel.findByIdAndUpdate(
      params.id,
      {
        $set: {
          title: params.title,
          price: params.price,
          quantity: params.quantity,
          url: params.url,
          description: params.description,
        },
      },
      { new: true },
    )
      .catch(err => new Error(err));
  },
};
