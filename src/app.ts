import bodyParser = require("body-parser");
import cors = require("cors");
import express = require("express");
import { graphiqlExpress, graphqlExpress } from "graphql-server-express";
import helmet = require("helmet");

import {welcomeQuery} from "./graphiQL_welcome_query";
import {schema} from "./schema";

const app: express.Application = express();

const helperMiddleware: express.RequestHandler[] = [
  bodyParser.json(),
  bodyParser.text({ type: "application/graphql" }),
  (req: express.Request, res: express.Response, next: any) => {
      if (req.is("application/graphql")) {
          req.body = { query: req.body };
      }
      next();
  },
];
app.disable("x-powered-by");
app.use(cors());
app.use("/graphql", ...helperMiddleware, graphqlExpress({ schema }));
app.use("/graphiql", graphiqlExpress({
  endpointURL: "/graphql",
  query: welcomeQuery,
}));

export default app;
