import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";
chai.should();
chai.use(chaiHttp);
describe("Question  from the user", () => {
  // get all post
  describe("GET /api/v1/questions", () => {
    it("it should return all questions", (done) => {
      chai
        .request(app)
        .get("/api/v1/questions")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
    it("it should'nt return all question", (done) => {
      chai
        .request(app)
        .get("/api/v1/question")
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          done();
        });
    });
  });
  // test for  get one
  // describe("GET /api/v1/blog/:blogid", () => {
  //   it("it should return one blog post", (done) => {
  //     const blogid = "5f6f6b22783ed3433c65497d";

  //     chai
  //       .request(app)
  //       .get("/api/v1/blog/" + blogid)
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a("object");
  //         res.body.should.have.property("message");
  //         res.body.should.have.property("data");

  //         done();
  //       });
  //   });

  //   it("it should'nt return one blog post", (done) => {
  //     const blogid = "fkjghluakfgjhlbvvhbav";
  //     chai
  //       .request(app)
  //       .get("/api/v1/blog" + blogid)
  //       .end((err, res) => {
  //         res.should.have.status(404);

  //         done();
  //       });
  //   });
  // });
  // test on creation of question
  describe("POST /api/v1/create/", () => {
    it("POST  new article ", (done) => {
      const question = {
        fname: "MUgabo  eric",
        email: "hac@gmail.com",
        subject: "hajyfk",
        questions: "Good job mugabo",
      };
      chai
        .request(app)
        .post("/api/v1/create/")
        .send(question)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          // res.body.should.have.property("message");
          // res.body.should.have.property("data");

          done();
        });
    });

    it(" NO  new question created", (done) => {
      const blogpost = {
        body: "hacking it was the illegal act",
      };
      chai
        .request(app)
        .post("/api/v1/create/")
        .send(blogpost)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");

          done();
        });
    });
  });
  // update or patch
  // delete one
  describe("DELETE /api/v1/deleteone/:id", () => {
    it("it should delete one question", (done) => {
      const id = "5f6f67ac61792e508c09188d";
      chai
        .request(app)
        .delete("/api/v1/deleteone/" + id)
        .end((err, res) => {
          res.should.have.status(200);

          // res.body.should.have.property("message");

          done();
        });
    });

    it("it should'nt DELETE one question", (done) => {
      const blogid = "fkjghluakfgjhlbvvhbav";
      chai
        .request(app)
        .delete("/api/v1/deleteone" + blogid)
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });
  });
});
