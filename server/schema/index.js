const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean
} = graphql;

const User = require('../models/User');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: { type: GraphQLID },
    id: { type: GraphQLInt },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    is_closed: { type: GraphQLBoolean },
    sex: { type: GraphQLInt },
    age: { type: GraphQLInt },
    photo_50: { type: GraphQLString },
    photo_100: { type: GraphQLString },
    photo_200_orig: { type: GraphQLString },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
		users: {
			type: new GraphQLList(UserType),
			resolve(parent, args) {
				return User.find({});
			}
		},
  }
});

module.exports = new GraphQLSchema({ query: Query });
