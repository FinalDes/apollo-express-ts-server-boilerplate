/* tslint:disable:no-console*/
/* tslint:disable:no-unused-expression*/
// import {expect, should} from "chai";
import request = require("supertest");
import app from "./../src/app";
// should();

const result = {data: {hi: "Hello World"}};

describe("Graphql test", () => {
  it("Get Hi, content-type application/json", (done) => {
    request(app)
    .post("/graphql")
    .set("Content-Type", "application/json; charset=UTF-8")
    .send({query: "{hi}"})
    .expect(200)
    .end((err, res) => {
      expect(err).toBe(null);
      expect(res.body).toEqual(result);
      // res.body.should.to.deep.equal(result);
      done();
    });
  });
  it("Get Hi, content-type application/graphql", (done) => {
    request(app)
    .post("/graphql")
    .set("Content-Type", "application/graphql; charset=UTF-8")
    .send("{hi}")
    .expect(200)
    .end((err, res) => {
      expect(err).toBe(null);
      expect(res.body).toEqual(result);
      // res.body.should.to.deep.equal(result);
      done();
    });
  });
});
