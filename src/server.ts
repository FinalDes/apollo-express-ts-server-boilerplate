import express = require("express");
import bodyParser = require("body-parser");
import helmet = require("helmet");
import { graphiqlExpress, graphqlExpress } from "graphql-server-express";
import {welcomeQuery} from "./graphiQL_welcome_query";
import {schema} from "./schema";

import dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(helmet());
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
app.use("/graphiql", graphiqlExpress({
  endpointURL: "/graphql",
  query: welcomeQuery,
}));

app.listen(PORT, () => {
  /*tslint:disable no-console*/
  console.log(`GraphQL Server is now running on http://localhost:${PORT}/graphql`);
  console.log(`View GraphiQL at http://localhost:${PORT}/graphiql`);
});

export default app;
