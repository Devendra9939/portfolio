const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

};

topBtn.onclick = function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
const words = [
    "HTML5 Developer",
    "CSS3 Expert",
    "Bootstrap Developer",
    "Responsive Web Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    let currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;
        }

    }else{

        typing.textContent = currentWord.substring(0,charIndex--);

        if(charIndex===0){

            deleting=false;

            wordIndex=(wordIndex+1)%words.length;
        }

    }

    setTimeout(typeEffect,deleting?40:90);

}

typeEffect();
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML='<i class="bi bi-sun-fill"></i>';
    }else{
        themeBtn.innerHTML='<i class="bi bi-moon-stars-fill"></i>';
    }
});
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});


// =======================
// EMAILJS CONTACT FORM
// =======================

emailjs.init({
    publicKey: "31ySPpn8Ps0VrsObm"
});

const contactForm = document.getElementById("contactForm");
const sendBtn = document.getElementById("sendBtn");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    sendBtn.disabled = true;
    sendBtn.innerHTML = "Sending...";

    emailjs.sendForm(
        "service_hv9d9k8",
        "template_7mwss85",
        this
    )

    .then(() => {

        Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for contacting me.",
            confirmButtonColor: "#0ea5e9"
        });

        contactForm.reset();

    })

    .catch((error) => {

        console.error(error);

        Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Message could not be sent.",
            confirmButtonColor: "#ef4444"
        });

    })

    .finally(() => {

        sendBtn.disabled = false;
        sendBtn.innerHTML = "Send Message";

    });

});

