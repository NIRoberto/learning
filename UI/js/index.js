const email = document.getElementById("email");
const password = document.getElementById("password");
const emailfalied = document.getElementById("spaceemail");
const invalidemail = document.getElementById("invalidemail");
const passfalied = document.getElementById("spacedpass");
const passfalie = document.getElementById("char");
let vemail = "enter valid email";
let vpass = "password must be larger than 5 charaters";
let rspace = "blank email not allowed";
let prspace = "blank  password not allowed";
loginvalidation = () => {
  if (!email.value.trim() && !password.value.trim()) {
    emailfalied.innerHTML = "blank email not allowed";
    emailfalied.style.color = "red";
    passfalied.innerHTML = "blank password not allowed";
    passfalied.style.color = "red";
    return false;
  } else if (
    email.value.trim() &&
    password.value.trim() &&
    password.value.length < 5
  ) {
    emailfalied.innerHTML = `<del>${rspace}</del>`;
    emailfalied.style.color = "red";
    passfalied.innerHTML = `<del>${prspace}</del>`;
    passfalied.style.color = "red";
    passfalie.innerHTML = "password must be larger than 5 charaters";
    passfalie.style.color = "red";
    invalidemail.innerHTML = "enter valid email";
    invalidemail.style.color = "red";
    return false;
  } else {
    passfalie.innerHTML = `<del>${vpass}</del>`;
    invalidemail.innerHTML = `<del>${vemail}</del>`;
    return true;
  }
};
const semail = document.getElementById("semail");
const spassword = document.getElementById("spassword");
const bemail = document.getElementById("spaceemail");
const bpass = document.getElementById("spacepassword");
const emailsr = document.getElementById("email");
const passsr = document.getElementById("pass");

var eregex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
let fbemail = "blank email not allowed";
let fbpass = "blank password not allowed";
let spass = "password must be longer than 6 characters";
signupvalidation = () => {
  if (!semail.value.trim() && !spassword.value.trim()) {
    bemail.innerHTML = "blank email not allowed";
    bemail.style.color = "red";
    bpass.innerHTML = "blank password not allowed";
    bpass.style.color = "red";
    return false;
  } else if (
    semail.value.trim() &&
    spassword.value.trim() &&
    spassword.value.length < 6 &&
    eregex.test(semail.value)
  ) {
    bemail.innerHTML = `<del>${fbemail}</del>`;
    bemail.style.color = "red";
    bpass.innerHTML = `<del>${fbpass}</del>`;
    bpass.style.color = "red";

    passsr.innerHTML = "password must be longer than 6 characters";
    passsr.style.color = "red";
    return false;
  } else {
    passsr.innerHTML = `<del>${spass}</del>`;
    return true;
  }
};
let post = document.querySelector(".list-allpost");
const createpost = document.querySelector("form");

getblogpost = (doc) => {
  post.innerHTML += `
  <div class="blog-top">
  <div class="blog-post">
    <div class="blog-img"><img src="/UI/img/javascript.jpg" alt="html" /></div>
    <div class="blog-desc">
      <div class="title">
        <h3 class="h3">${doc.data().title}</h3>
      </div>
      <div class="text">
        <p>
        ${doc.data().subbody}
        </p><br>
        <div class="button">
          <a href="#" id="updates">edit</a>
          <a href="javascript:delet('${doc.id}')" id="deletes">Delete</a>
      </div>
      </div>
  </div>
  </div>
  <br /><br />
</div>
  `;
};
delet = (id) => {
  db.collection("blog")
    .doc(id)
    .delete()
    .then((res) => {
      window.location.href = "/UI/admin post/post/all.html";
    });
};
// delet = (id) => {
//   db.collection("blog").doc(id).delete();
// };

db.collection("blog")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      getblogpost(doc);
    });
  });
createpost.addEventListener("click", (e) => {
  e.preventDefault();
  db.collection("blog").add({
    title: createpost.title.value,
    subbody: createpost.subbody.value,
    body: createpost.body.value,
  });
});
