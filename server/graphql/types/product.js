const GraphQLString = require('graphql').GraphQLString;
const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLID = require('graphql').GraphQLID;
const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLFloat = require('graphql').GraphQLFloat;
const GraphQLInt = require('graphql').GraphQLInt;

module.exports.productType = new GraphQLObjectType({
  name: 'product',
  fields() {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      title: {
        type: GraphQLString,
      },
      price: {
        type: GraphQLFloat,
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
    };
  },
});
