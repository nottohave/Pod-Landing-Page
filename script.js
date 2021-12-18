const email = document.getElementById("email");
const form = document.querySelector("#form");
const emailLabel = document.querySelector(".email-label");

var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validation() {
    if (email.value.match(pattern)) {
        console.log("hellow");
        emailLabel.classList.add("display");
    } else {
        console.log("oh no");
        emailLabel.classList.remove("display");

    }    
}
