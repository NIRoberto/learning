let formmm = document.querySelector("#formm");
let elemen = document.querySelector("ol");
let manage = document.querySelector("table");

renderLog = (doc) => {
  let li = document.createElement("a");
  let topic = document.createElement("a");
  topic.textContent = doc.data().topic;
  li.appendChild(topic);
  elemen.innerHTML += `<li class="lis"><a class="lis" href="#"> ${
    doc.data().topic
  }</a> </li><hr><br>`;
};

//getting data in console
db.collection("topics")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderLog(doc);
    });
  });

//saving data on the database
formm.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("topics").add({
    topic: formm.topic.value,
  });
  formm.topic.value = "";
});
