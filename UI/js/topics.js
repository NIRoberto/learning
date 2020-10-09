let manage= document.querySelector("table");
 let ele=document.querySelector("ol");
    renderLog = (doc) => {
   let li=document.createElement('a');
   let topic=document.createElement('a');
   topic.textContent=doc.data().topic;
   li.appendChild(topic);
    manage.innerHTML+=` <td>2</td>
    <td>${doc.data().topic}</td>
    <td>robert</td>
    <td> <a  id="edit" href="#">edit</a></td>
    <td><a id="delete" href="javascript:delet('${doc.id}');">Delete</a></td> </tr>`;
    }
   //getting data in console
db.collection("topics").get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    renderLog(doc);
  });
});
//delete dataa


delet = (id) => {
  db.collection('topics').doc(id).delete();
}


   
 