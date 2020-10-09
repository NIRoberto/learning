let card = document.querySelector(".recent-post");
let fomm = document.querySelector("#foorm");
let list = document.querySelector(".se-top");

renderLogs = (doc) => {
  card.innerHTML += `
  <div class="recent-art">
  <div class="data">
 <img src="/UI/img/web-d.jpg" alt="web development" width="100%" height="100%">


</div>
 <div><div class="details">
     <div class="data">
 <h1 class="title">${doc.data().title}</h1>
 <p class="text">${doc.data().text}</p>
</div>
<div class="work">
<span  id="date">${new Date()}</span>
</div>
<div class="read-m">
<a class="read " href="/UI/html/singleblog.html">Read more &raquo;</a>
</div>

</div>
</div></div>
`;
};
deletes = (id) => {
  db.collection("blog-database").doc(id).delete();
};
logout = () => {
  auth.signOut();
  window.location.href = "/UI/html/blog.html";
};
//getting databases
db.collection("blog-database")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderLogs(doc);
      console.log(doc);
    });
    console.log(snapshot.docs);
  });
//saving data
renderlogss = (doc) => {
  let h1 = document.createElement("div");
  let title = document.createElement("h1");
  let text = document.createElement("p");

  li.setAttribute("data-id", doc.id);
  h1.setAttribute("data-id", doc.id);
  title.textContent = doc.data().title;
  text.textContent = doc.data().text;
  h1.appendChild(title);
  h1.appendChild(text);
  formm.appendChild(h1);
};
// saving data
fomm.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("blog-database").add({
    title: fomm.title.value,
    text: fomm.text.value,
  });
  fomm.title.value = "";
  fomm.text.value = "";
});
