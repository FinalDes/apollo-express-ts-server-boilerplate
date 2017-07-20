import express = require("express");
import bodyParser = require("body-parser");
import helmet = require("helmet");
import { graphiqlExpress, graphqlExpress } from "graphql-server-express";

import {welcomeQuery} from "./graphiQL_welcome_query";
import {schema} from "./schema";

const app = express();
app.use(helmet());
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
app.use("/graphiql", graphiqlExpress({
  endpointURL: "/graphql",
  query: welcomeQuery,
}));

export default app;
