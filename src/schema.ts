import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
  type Query{
    hi: String
  }
`;

const resolvers = {
  Query: {
    hi: () => {
      return "Hello World";
    },
  },
};

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});
