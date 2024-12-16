function data (){
    let a = document.querySelector("#a1").value;
    let b = document.querySelector("#b1").value;
    let c = document.querySelector("#c1").value;
    let d = document.querySelector("#d1").value;

if(a == "" || b == "" || c == "" || d == ""){
    alert("All section should be mendetary!");
    return false;
}
else if(b.length<10||b.length>10){
    alert("Number shuld be 10 digit");
    return false;
}
else if(isNaN(b)){
    alert("Only number is allow in contect number");
    return false;
}
else if(c.length<4 || c.length>4){
    alert("Password should be only 4 digit");
    return false;
}
else if(c != d){
    alert("Please enter same password");
    return false;
}
else{
    true;
}
}
