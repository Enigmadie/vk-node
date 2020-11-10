const graphql = require('graphql');
const User = require('../models/User').default;

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: { type: GraphQLID },
    id: { type: GraphQLInt },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    is_closed: { type: GraphQLBoolean },
    sex: { type: GraphQLString },
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
        // console.log(User);
        // User.find({}).then((res) => {
        //   return res;
        // }).catch((e) => console.log(e));
				return User.find({});
			}
		},
  }
});

module.exports = new GraphQLSchema({ query: Query });
