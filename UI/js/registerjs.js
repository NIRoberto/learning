var eemail=document.getElementById("email");
var paassword=document.getElementById("password");

   function validate(){
    if(eemail.value.trim()==""||paassword.value.trim()=="")
    {
         document.getElementById("demoo").style.color="rgb(136, 28, 28)";
        document.getElementById("deemo").innerHTML="password cannot be blank";
        document.getElementById("deemo").style.color="rgb(136, 28, 28)";
        document.getElementById("demos").innerHTML="password cannot be blank";
        document.getElementById("demos").style.color="rgb(136, 28, 28)";
        document.getElementById("demoss").innerHTML="email cannot be blank";
        document.getElementById("demoss").style.color="rgb(136, 28, 28)";
       return false;
    }
    
    
    else{
        auth.createUserWithEmailAndPassword(eemail.value,paassword.value).then(cred =>{
            console.log(cred.user);
           })
    true;
        
        }}
