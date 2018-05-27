const GraphQLList = require('graphql').GraphQLList;
const GraphQLObjectType = require('graphql').GraphQLObjectType;
const ProductModel = require('../../models/product');
const productType = require('../types/product').productType;

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields() {
    return {
      products: {
        type: new GraphQLList(productType),
        resolve() {
          const products = ProductModel.find().exec();
          if (!products) {
            throw new Error('Error');
          }
          return products;
        },
      },
    };
  },
});
