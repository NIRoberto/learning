import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";
chai.should();
chai.use(chaiHttp);
describe("blog post", () => {
  // get all post
  describe("GET /api/v1/blogs", () => {
    it("it should return all blog post", (done) => {
      chai
        .request(app)
        .get("/api/v1/blogs")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    it("it should'nt return all blog post", (done) => {
      chai
        .request(app)
        .get("/api/v1/blo")
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          done();
        });
    });
  });
  // test for  get one
  describe("GET /api/v1/blog/:blogid", () => {
    it("it should return one blog post", (done) => {
      const blogid = "5f6f6b22783ed3433c65497d";

      chai
        .request(app)
        .get("/api/v1/blog/" + blogid)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("message");
          res.body.should.have.property("data");

          done();
        });
    });

    it("it should'nt return one blog post", (done) => {
      const blogid = "fkjghluakfgjhlbvvhbav";
      chai
        .request(app)
        .get("/api/v1/blog" + blogid)
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });
  });
  // test for posting new articles
  describe("POST /api/v1/post/", () => {
    it("POST  new article ", (done) => {
      const blogpost = {
        title: "Hacker",
        body:
          "meaning of being a hacker ,How to be hacker ,ways that can help ",
      };
      chai
        .request(app)
        .post("/api/v1/post/")
        .send(blogpost)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          res.body.should.have.property("message");
          res.body.should.have.property("data");

          done();
        });
    });

    it(" NOT POST  new article created", (done) => {
      const blogpost = {
        body: "hacking it was the illegal act",
      };
      chai
        .request(app)
        .post("/api/v1/post/")
        .send(blogpost)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");

          done();
        });
    });
  });
  // update or patch
  // test for posting new articles
  describe("PATCH /api/v1/update/:id", () => {
    it("UPDATE  EXISTING article ", (done) => {
      const id = "5f6f67ac61792e508c09188d";
      const blogpost = {
        title: "Hacker dgjl",
        body:
          "meaning of being a hacker ,How to be hacker ,ways that can help ",
      };
      chai
        .request(app)
        .patch("/api/v1/update/" + id)
        .send(blogpost)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          // res.body.should.have.property("message");
          // res.body.should.have.property("data");

          done();
        });
    });

    it("update an  article ", (done) => {
      const blogpost = {
        body: "hacking it was the illegal act",
      };
      chai
        .request(app)
        .patch("/api/v1/update/")
        .send(blogpost)
        .end((err, res) => {
          res.should.have.status(404);
          // res.body.should.be.a("object");

          done();
        });
    });
  });
  //delete one
  describe("DELETE /api/v1/delete/:blogid", () => {
    it("it should delete one blog post", (done) => {
      const blogid = "5f6f6b22783ed3433c65497d";
      chai
        .request(app)
        .delete("/api/v1/delete/" + blogid)
        .end((err, res) => {
          res.should.have.status(200);

          // res.body.should.have.property("message");

          done();
        });
    });

    it("it should'nt DELETE one blog post", (done) => {
      const blogid = "fkjghluakfgjhlbvvhbav";
      chai
        .request(app)
        .delete("/api/v1/delete" + blogid)
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });
  });
});
