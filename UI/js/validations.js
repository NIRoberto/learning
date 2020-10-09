/*let  finame=document.getElementById("name").value;
let eemail=document.getElementById("email").value;
let suubject=document.getElementById("subject").value;*/
let row=document.querySelector("#table");
 
function valid(){
  if(finame.trim() && eemail.trim() && suubject.trim()){
    console.log("valid data"); 
    console.log("valid email");
    console.log("valid subject");
 }
}
renderLogss = (doc) =>{
    row.innerHTML +=`
    <tr class="row">
    <td>1</td>
    <td>${doc.data().subject}</td>
    <td>${doc.data().fname}</td>
    <td>${doc.data().email}</td>
    <td>${doc.data().message}</td>
    <td><a  id="delete" href="javascript:deletess('${doc.id}');">Delete</a></td>
</tr>
  
  `}
  //getting databases
db.collection("question").get().then((snapshot) => {
    snapshot.docs.forEach(doc =>{
      renderLogss(doc);
     })
 console.log(snapshot.docs);
  });
//delete dataa
deletess = (id) => {
  db.collection('question').doc(id).delete();
}

