

function regular  () {
    const name=document.getElementById("name").value;
const password=document.getElementById("password").value;

regexu=/[a-zA-Z]/ig;
regexp=/[0-9]/ig;
if (regexu.test(name) && regexp.test(password)){
    document.getElementById("names").innerHTML="valid name";
    document.getElementById("pasword").innerHTML="valid password";

    return true ;

}

else{
    document.getElementById("names").innerHTML="invalid name or passsworda";
    document.getElementById("pasword").innerHTML="invalid name or passsworda";

   
return false;
}


}