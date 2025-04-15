function data (){
    let userName = document.querySelector("#username").value;
    let contactNo = document.querySelector("#contactNo").value;
    let Password = document.querySelector("#pass").value;
    let conformPass = document.querySelector("#conformPass").value;

if(userName == "" || contactNo == "" || Password == "" || conformPass == ""){
    alert("All section should be mendetary!");
    return false;
}
else if(contactNo.length < 10 || contactNo.length > 10){
    alert("Number shuld be 10 digit");
    return false;
}
else if(isNaN(contactNo)){
    alert("Only number is allow in contect number");
    return false;
}
else if(Password.length < 4 || Password.length > 4){
    alert("Password should be only 4 digit");
    return false;
}
else if(Password != conformPass){
    alert("Please enter same password");
    return false;
}
else{
    true;
}
}
