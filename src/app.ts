import bodyParser = require("body-parser");
import express = require("express");
import { graphiqlExpress, graphqlExpress } from "graphql-server-express";
import helmet = require("helmet");

import {welcomeQuery} from "./graphiQL_welcome_query";
import {schema} from "./schema";

const app = express();

const helperMiddleware = [
  bodyParser.json(),
  bodyParser.text({ type: "application/graphql" }),
  (req: any, res: any, next: any) => {
      if (req.is("application/graphql")) {
          req.body = { query: req.body };
      }
      next();
  },
];

app.use(helmet());
app.use("/graphql", ...helperMiddleware, graphqlExpress({ schema }));
app.use("/graphiql", graphiqlExpress({
  endpointURL: "/graphql",
  query: welcomeQuery,
}));

export default app;
