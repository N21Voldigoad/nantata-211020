const form = document.getElementById("verify-form");

const CONFIG = {

    birthday : "2004-08-21",

    nickname : "Tata"

};

form.addEventListener("submit",function(e){

    e.preventDefault();

    const birthday = document
        .getElementById("birthday")
        .value
        .trim();

    const nickname = document
        .getElementById("nickname")
        .value
        .trim()
        .toLowerCase();

    if(
        birthday === CONFIG.birthday &&
        nickname === CONFIG.nickname.toLowerCase()
    ){

        gsap.to("#verification-screen",{

            opacity:0,
            duration:.7,

            onComplete:()=>{

                window.location.href="terminal.html";

            }

        });

    }else{

        gsap.from(".verification-card",{

            x:-10,
            repeat:5,
            yoyo:true,
            duration:.05

        });

        alert("Yahh masih ada yang salah, dasar pikun 😣");

    }

});