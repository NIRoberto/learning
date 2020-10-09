import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";
chai.should();
chai.use(chaiHttp);
describe("Users", () => {
  // get all post
  describe("GET /api/v1/users", () => {
    it("it should get  all user", (done) => {
      chai
        .request(app)
        .get("/api/v1/users")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");

          done();
        });
    });

    it("it should'nt get all user", (done) => {
      chai
        .request(app)
        .get("/api/v1/userss")
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          done();
        });
    });
  });
  // test  for signup
  describe("POST /api/v1/signup/", () => {
    it("Create a new user ", (done) => {
      const userinfo = {
        email: "robz2@gmail.com",
        password: "123456 ",
      };
      chai
        .request(app)
        .post("/api/v1/signup/")
        .send(userinfo)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");

          done();
        });
    });

    it(" Not created new user ", (done) => {
      const userinfo = {
        password: "hacking it was the illegal act",
      };
      chai
        .request(app)
        .post("/api/v1/signup/")
        .send(userinfo)
        .end((err, res) => {
          res.should.have.status(409);
          res.body.should.be.a("object");

          done();
        });
    });
  });

  // test for login
  describe("POST /api/v1/login/", () => {
    it("login for registered", (done) => {
      const userinfo = {
        email: "robz2@gmail.com",
        password: "123456 ",
      };
      chai
        .request(app)
        .post("/api/v1/login/")
        .send(userinfo)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");

          done();
        });
    });

    it(" NOT logged in becouse  of invalid data", (done) => {
      const userinfo = {
        body: "hacking it was the illegal act",
      };
      chai
        .request(app)
        .post("/api/v1/login/")
        .send(userinfo)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");

          done();
        });
    });
  });
  // update or patch
  // test for posting new articles
  //   describe("PATCH /api/v1/update/:id", () => {
  //     it("UPDATE  EXISTING article ", (done) => {
  //       const id = "5f6f67ac61792e508c09188d";
  //       const blogpost = {
  //         title: "Hacker dgjl",
  //         body:
  //           "meaning of being a hacker ,How to be hacker ,ways that can help ",
  //       };
  //       chai
  //         .request(app)
  //         .patch("/api/v1/update/" + id)
  //         .send(blogpost)
  //         .end((err, res) => {
  //           res.should.have.status(200);
  //           res.body.should.be.a("object");
  //           // res.body.should.have.property("message");
  //           // res.body.should.have.property("data");

  //           done();
  //         });
  //     });

  //     it("update an  article ", (done) => {
  //       const blogpost = {
  //         body: "hacking it was the illegal act",
  //       };
  //       chai
  //         .request(app)
  //         .patch("/api/v1/update/")
  //         .send(blogpost)
  //         .end((err, res) => {
  //           res.should.have.status(404);
  //           // res.body.should.be.a("object");

  //           done();
  //         });
  //     });
  //   });
  // delete one;
  describe("DELETE /api/v1/userid/:uid", () => {
    it("it should delete one blog post", (done) => {
      const uid = "5f7087e93f64033ecce6b924";
      chai
        .request(app)
        .delete("/api/v1/userid/" + uid)
        .end((err, res) => {
          res.should.have.status(200);

          // res.body.should.have.property("message");

          done();
        });
    });

    it("it should'nt DELETE one blog post", (done) => {
      const uid = "fkjghluakfgjhlbvvhbav";
      chai
        .request(app)
        .delete("/api/v1/userid/" + uid)
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });
  });
});
