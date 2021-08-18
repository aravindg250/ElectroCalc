//Firestore

const fb = firebase.default;
const fs = fb.firestore();
const auth = fb.auth();

const form = document.getElementById("carSearchForm");


form.addEventListener("submit", event =>
{
    var car = document.getElementById("teslaPicked").value;
    event.preventDefault();
    // fs.collection("users").doc(""+form.name.value).set({
    //     NAME: form.name.value,
    //     EMAIL: form.email.value,
    //     CAR: form.select.value
        
    // });
    form.name.value="";
    form.email.value="";
    console.log(car);  
    form.style.display = "none";

    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.body.appendChild(x);
  
    var y = document.createElement("TR");
    y.setAttribute("id", "myTr");
    document.getElementById("myTable").appendChild(y);
  
    var z = document.createElement("TD");
    var t = document.createTextNode("cell");
    z.appendChild(t);
    document.getElementById("myTr").appendChild(z);


    
});



 