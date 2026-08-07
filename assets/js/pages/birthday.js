/* ========================= */
/* ELEMENT */
/* ========================= */

const music = document.getElementById("birthday-music");

const typingText = document.getElementById("typing-text");

const nextButton = document.getElementById("next-prayer");

/* ========================= */
/* MESSAGE */
/* ========================= */

const birthdayMessage = `

Selamat ulang tahun Tata. 🥳❤️

Semoga di umur 22 apa yang kamu kejar, cepat terkejar.

Kamu hebat bisa bertahan di dunia yang ga adil sampai detik ini.

Semoga hari ini menjadi awal dari hari hari yang baik kedepannya.

Karir, pendidikan, tubuh, dan ekonomi semuanya akan membaik di mulai dari hari ini`;

let index = 0;

const typingSpeed = 28;

/* ========================= */
/* MUSIC */
/* ========================= */

window.addEventListener("load", () => {

    music.volume = 0.6;

    music.play().catch(() => {

        console.log("Autoplay diblokir browser.");

    });

});

/* ========================= */
/* INTRO */
/* ========================= */

const tl = gsap.timeline({

    defaults:{
        ease:"power3.out"
    }

});

tl.from(".birthday-title",{

    y:-35,
    opacity:0,
    duration:.8

})

.from(".left-card",{

    x:-120,
    rotation:-20,
    opacity:0,
    duration:.8

},"-=0.2")

.from(".right-card",{

    x:120,
    rotation:20,
    opacity:0,
    duration:.8

},"-=0.6")

.from(".center-card",{

    opacity:0,

    y:40,

    duration:.9,

    ease:"back.out(1.8)",

    onComplete(){

        startTyping();

        floatingAnimation();

    }

})

/* ========================= */
/* FLOATING */
/* ========================= */

function floatingAnimation(){

    gsap.to(".left-card .photo-float",{

        y:-10,

        duration:2.8,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

    });

    gsap.to(".center-card .photo-float",{

        y:-7,

        duration:3,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

    });

    gsap.to(".right-card .photo-float",{

        y:-10,

        duration:2.6,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

    });

}

/* ========================= */
/* ORIGAMI FLOATING */
/* ========================= */

function floatingOrigami(){

    gsap.to(".paper-plane .origami-float",{

        y:-12,

        duration:2.8,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

    });

    gsap.to(".paper-crane .origami-float",{

        y:-12,

        duration:3.2,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

    });

}

/* ========================= */
/* HOVER */
/* ========================= */

document.querySelectorAll(".photo-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        gsap.to(card,{

            scale:1.05,

            duration:.25,

            boxShadow:"0 30px 60px rgba(0,0,0,.38)"

        });

    });

    card.addEventListener("mouseleave",()=>{

        gsap.to(card,{

            scale:1,

            duration:.25,

            boxShadow:"0 20px 45px rgba(0,0,0,.28)"

        });

    });

});

/* ========================= */
/* TYPING */
/* ========================= */

function startTyping(){

    if(index < birthdayMessage.length){

        typingText.innerHTML += birthdayMessage.charAt(index);

        index++;

        setTimeout(startTyping,typingSpeed);

    }

    else{

        nextButton.style.display="inline-flex";

        nextButton.style.visibility="visible";

        nextButton.style.pointerEvents="auto";

        gsap.fromTo(

            nextButton,

            {

                opacity:0,

                y:15

            },

            {

                opacity:1,

                y:0,

                duration:.45

            }


        );

    }

}

/* ========================= */
/* NEXT */
/* ========================= */

nextButton.addEventListener("click",()=>{

    nextButton.style.pointerEvents="none";

    gsap.to(nextButton,{

        opacity:0,

        y:20,

        duration:.35,

        onComplete(){

            nextButton.style.display="none";

            const prayerSection = document.getElementById("prayer-section");

            prayerSection.style.visibility = "visible";
            prayerSection.style.pointerEvents = "auto";

            gsap.timeline()

            .fromTo(".prayer-title",
                {
                    opacity:0,
                    y:-30
                },
                {
                    opacity:1,
                    y:0,
                    duration:.8
                })

                .fromTo(".prayer-subtitle",
                    {
                        opacity:0,
                        y:-15
                    },
                    {
                        opacity:1,
                        y:0,
                        duration:.6
                    },"-=0.35")

                    .fromTo(".origami",
                        {
                            opacity:0,
                            y:40,
                            scale:.8
                        },
                        {
                            opacity:1,
                            y:0,
                            scale:1,
                            duration:.7,
                            stagger:.2
                        },"-=0.25");

                        floatingOrigami();
                        
                        gsap.to(prayerSection,{
                            opacity:1,
                            duration:.6
                        });

                        prayerSection.scrollIntoView({
                            behavior:"smooth"
                        });

                    }

                });


            });

const cards=document.querySelectorAll(".photo-card");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        gsap.killTweensOf(card);

        card.style.zIndex=50;

        gsap.to(card,{

            y:-15,

            boxShadow:"0 35px 70px rgba(0,0,0,.45)",

            duration:.25,

            ease:"power2.out"

        });

        gsap.delayedCall(.8,()=>{

            gsap.to(card,{

                y:0,

                boxShadow:"0 20px 45px rgba(0,0,0,.28)",

                duration:.3,

                ease:"power2.out",

                onComplete(){

                    if(card.classList.contains("center-card")){

                        card.style.zIndex=5;

                    }else{

                        card.style.zIndex=1;

                    }

                }

            });

        });

    });

});

/* ====================================== */
/* PRAYER */
/* ====================================== */

const popupOverlay = document.getElementById("popup-overlay");

const popupTitle = document.getElementById("popup-title");

const popupText = document.getElementById("popup-text");

const closePopup = document.getElementById("close-popup");

const plane = document.getElementById("plane");

const crane = document.getElementById("crane");

const nextEnding = document.getElementById("next-ending");

const endingSection = document.getElementById("ending-section");

const endingTyping = document.getElementById("ending-typing");

const replayButton = document.getElementById("replay-music");

nextEnding.style.display = "none";

let planeOpened = false;
let craneOpened = false;

const prayerData = {

    plane:{

        title:"Doa Pertama 🤲",

        text:`Semoga segala sesuatu yang kamu cintai;jika itu sudah ada maka semakin di eratkan, jika belum ada maka segera di dapatkan.`
    },

    crane:{

        title:"Doa Kedua 🤲",

        text:`Semoga perjuanganmu belakangan seperti keinginan memiliki tubuh ideal dan wajah glow up segera tercapai.Lalu harapan mengenai karir yang sukses, pendidikan yang baik dan bergelar, serta ekonomi yang naik semoga cepat kesampean.`

    }

};

const endingMessage = `

Semoga hadiah kecil ini bisa membuatmu tersenyum hari ini dan bisa menghiburmu.

Mungkin website ini sederhana, tapi setiap bagian kubat dengan cinta yang tulus.

Terimakaih sudah menjadi hal terpenting buat aku. Terimakasih juga sudah menyempatkan waktu untuk membuka website ini.

Sekali lagi...

Selamat ulang tahun Sayang.❤️

`;

let endingIndex = 0;

function openPrayer(type, element){

    gsap.to(element,{

        x:window.innerWidth/2-element.getBoundingClientRect().left-element.offsetWidth/2,

        y:window.innerHeight/2-element.getBoundingClientRect().top-element.offsetHeight/2,

        scale:1.25,

        duration:.45,

        ease:"power2.out",

        onComplete(){

            popupTitle.innerHTML=prayerData[type].title;

            popupText.innerHTML=prayerData[type].text;

            popupOverlay.classList.add("show");

            gsap.from(".popup",{

                scale:.8,

                opacity:0,

                duration:.4

            });

            gsap.set(element,{

                clearProps:"transform"

            });

        }

    });

}

plane.addEventListener("click",()=>{

    planeOpened=true;

    openPrayer("plane",plane);

});

crane.addEventListener("click",()=>{

    craneOpened=true;

    openPrayer("crane",crane);

});

closePopup.addEventListener("click",closePrayer);

popupOverlay.addEventListener("click",(e)=>{

    if(e.target===popupOverlay){

        closePrayer();

    }

});

function closePrayer(){

    popupOverlay.classList.remove("show");

    if(planeOpened && craneOpened){

        nextEnding.style.display = "inline-flex";
        nextEnding.style.pointerEvents = "auto";

        gsap.fromTo(

            nextEnding,

            {
                opacity:0,
                y:15
            },

            {
                opacity:1,
                y:0,
                duration:.45
            }

        );

    }

}

function startEndingTyping(){

    if(endingIndex < endingMessage.length){

        endingTyping.innerHTML += endingMessage.charAt(endingIndex);

        endingIndex++;

        setTimeout(startEndingTyping,28);

    }

    else{

    replayButton.style.pointerEvents="auto";

    gsap.fromTo(
        replayButton,
        {
            opacity:0,
            y:15
        },
        {
            opacity:1,
            y:0,
            duration:.5
        }
    );

}

}

nextEnding.addEventListener("click",()=>{

    nextEnding.style.pointerEvents="none";

    // sembunyikan tombol Next setelah diklik
    gsap.to(nextEnding,{
        opacity:0,
        y:20,
        duration:.35,
        onComplete(){

            nextEnding.style.display="none";

            endingSection.style.visibility="visible";
            endingSection.style.pointerEvents="auto";

            gsap.to(endingSection,{
                opacity:1,
                duration:.5
            });

            endingSection.scrollIntoView({
                behavior:"smooth"
            });

            gsap.timeline()

            .fromTo(
                ".ending-photo",
                {
                    opacity:0,
                    y:40
                },
                {
                    opacity:1,
                    y:0,
                    duration:.7
                }
            )

            .fromTo(
                ".ending-title",
                {
                    opacity:0,
                    y:20
                },
                {
                    opacity:1,
                    y:0,
                    duration:.6
                },
                "-=.35"
            )

            .add(startEndingTyping)

            .add(endingPhotoAnimation);

        }
    });

});

/* ====================================== */
/* REPLAY MUSIC */
/* ====================================== */

replayButton.addEventListener("click", () => {

    music.pause();

    music.currentTime = 0;

    music.play();

});

/* ====================================== */
/* ENDING PHOTO */
/* ====================================== */

function endingPhotoAnimation(){

    gsap.to(".ending-photo",{

    rotation:2,

    y:-5,

    duration:2.6,

    repeat:-1,

    yoyo:true,

    transformOrigin:"center center",

    ease:"sine.inOut"

});

}

const endingPhoto = document.querySelector(".ending-photo");

if(endingPhoto){

    endingPhoto.addEventListener("mouseenter",()=>{

        gsap.to(endingPhoto,{

            y:-8,

            duration:.3

        });

    });

    endingPhoto.addEventListener("mouseleave",()=>{

        gsap.to(endingPhoto,{

            y:0,

            duration:.3

        });

    });

}