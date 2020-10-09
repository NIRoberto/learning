//listen for auth status changes
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("user had logged in", user);
  } else {
    console.log("user had logged out");
  }
});
const formm = document.querySelector("#formm");
formm.addEventListener("submit", (e) => {
  e.preventDefault();
  //getting the user data

  let email = formm["email"].value;
  let password = formm["password"].value;

  //logout of the user
});
/*let logout=document.querySelector("#logout" );
logout.addEventListener('click',(e)=>{
    e.preventDefault();
  auth.signOut();
});
   */

//login
/* const loginform=document.querySelector('#formm');
  loginform.addEventListener('submit',(e)=>{
      e.preventDefault();
      //get user info
      let email=loginform["email"].value;
      let password=loginform["password"].value;
      console.log(email);
     auth.signInWithEmailAndPassword(email,password).then(cred =>{
      })
})
*/
