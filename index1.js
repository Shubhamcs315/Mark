let a=window.location.href;
var url=new URL(a);
var a1=url.searchParams.get("name");
var email=url.searchParams.get("email");
document.getElementById("add").innerHTML=a1;
document.getElementById("bjp").innerHTML=email;
let v=JSON.parse(localStorage.getItem(email))[1];
console.log(v);
document.getElementById("mark").innerHTML=`<b>${v}%</b>`;