import request = require("supertest");
import app from "./../src/app";

describe("server test", () => {
  it("Check headers", (done: jest.DoneCallback) => {
    request(app)
      .post("/graphql")
      .set("Content-Type", "application/graphql; charset=UTF-8")
      .send("{hi}")
      .expect(200)
      .end((err, res: request.Response) => {
        expect(err).toBeNull();
        expect(res.header["x-powered-by"]).toBeUndefined();
        done();
      });
  });
  it("check option request", (done: jest.DoneCallback) => {
    request(app)
      .options("/graphql")
      .expect(204)
      .end((err, res: request.Response) => {
        expect(err).toBeNull();
        expect(res.header["access-control-allow-methods"]).toBe("POST");
        done();
      });

  });
});
