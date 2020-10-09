const fname=document.getElementById("fname");
const email=document.getElementById("email");
const message=document.getElementById("message");
const subject=document.getElementById("subject");
const form =document.querySelector("form");



// saving data 
form.addEventListener('submit',(ee)=>{
    ee.preventDefault();
    db.collection('question').add({
      fname:form.fname.value,
      email:form.email.value,
      subject:form.subject.value,
      message:form.message.value
      });
      form.fname.value="",
      form.email.value="",
      form.subject.value="",
      form.message.value=""
    })
