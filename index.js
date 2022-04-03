localStorage.setItem("sheteshubham315@gmail.com",JSON.stringify([123,96]));
localStorage.setItem("raj31@gmail.com",JSON.stringify([456,90]));
localStorage.setItem("ganesh21@gmail.com",JSON.stringify([789,80]));
localStorage.setItem("we123@gmail.com",JSON.stringify([101,78]));
// let b=localStorage.getItem("raj31@gmail.com");
// console.log(b);
let sub=document.getElementById("su");
sub.addEventListener('click',function(e) {
    let v1=document.getElementsByClassName("k2");
    let name1=document.getElementById("exampleInputEmail11").value;
    let email=document.getElementById("exampleInputEmail1").value;
    let pass=document.getElementById("exampleInputEmail112").value;
    let a=document.getElementById("add");
    // console.log(a);
    // console.log("guuu");
    // console.log(name1);
    // console.log(email);
    // console.log(pass);
    var student={
        name:name1,
        e:email,
        pa:pass
    }
    console.log(JSON.parse(localStorage.getItem(email))[0]);
    if(pass==JSON.parse(localStorage.getItem(email))[0]){
        console.log("hi");
        // console.log(JSON.parse(localStorage.getItem(email)[0]));
        location.href=`http://127.0.0.1:5501/index1.html?name=${name1}&email=${email}`;
       
    }
    else{
        alert("Wrong Password");
    }
    e.preventDefault();
})
