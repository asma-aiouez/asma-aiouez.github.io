"use strict"

let btn = document.getElementById("btnSubmit");
btn.addEventListener("click", function(event) {
        event.preventDefault();
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let url = document.getElementById("url");
        let check = document.getElementById("check");
        console.log("email: "+email.value);
        console.log("password: "+password.value);
        console.log("url: "+url.value);
        console.log("check: "+check.value)
     })
