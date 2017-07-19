/* tslint:disable:no-console*/
/* tslint:disable:no-unused-expression*/
import {expect, should} from "chai";
import request = require("supertest");
import app from "./../src/server";
should();

const result = {data: {hi: "Hello World"}};

describe("Graphql test", () => {
  it("Get Hi, content-type application/json", (done) => {
    request(app)
    .post("/graphql")
    .set("Content-Type", "application/json; charset=UTF-8")
    .send({query: "{hi}"})
    .expect(200)
    .end((err, res) => {
      console.log(err);
      expect(err).to.be.null;
      res.body.should.to.deep.equal(result);
      done();
    });
  });
});
