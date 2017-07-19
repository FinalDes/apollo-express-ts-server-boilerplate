import { makeExecutableSchema } from "graphql-tools";
import {resolvers} from "./schema/resolvers";
import {typeDefs} from "./schema/typeDefs";

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});
