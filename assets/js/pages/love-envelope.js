const flap = document.getElementById("flap");
const letter = document.getElementById("letter");
const button = document.getElementById("open-btn");
const doraemon = document.getElementById("doraemon");

gsap.from(".envelope-wrapper",{

    opacity:0,

    y:40,

    duration:.8,

    ease:"power3.out"

});

gsap.to(button,{

    y:-8,

    repeat:-1,

    yoyo:true,

    duration:1.2,

    ease:"sine.inOut"

});

button.addEventListener("click",()=>{

    button.disabled=true;

    // sembunyikan tombol

    gsap.to(button,{

        opacity:0,

        duration:.25

    });

    // buka flap

    gsap.to(flap,{

        rotateX:-180,

        duration:.9,

        ease:"power2.inOut"

    });

    // keluarkan surat

    // surat keluar

    gsap.to(letter,{

        y:-150,

        duration:.8,

        delay:.25,

        ease:"power3.out",

        onComplete(){

        // surat maju ke depan

        letter.style.zIndex = "30";

        gsap.to(letter,{

            rotation:-2,

            duration:.35

        });

        gsap.to(letter,{

            scale:1.05,

            y:-170,

            duration:.45,

            ease:"power2.out"

        });

    }

});

    // munculkan doraemon

    gsap.to(doraemon,{

        opacity:1,

        scale:1,

        duration:.6,

        delay:2.8,

        ease:"back.out(2)"

    });

    // bounce

    gsap.to(doraemon,{

        y:-18,

        repeat:1,

        yoyo:true,

        duration:.25,

        delay:3

    });

    // zoom transisi

    gsap.delayedCall(4.5,()=>{

        gsap.to(doraemon,{

            scale:.75,

            duration:.35,

            ease:"power2.out",

            onComplete(){

                gsap.to(doraemon,{

                    scale:6,

                    duration:1,

                    ease:"power4.in"

                });

            }

        });

    });

    // pindah halaman

    gsap.delayedCall(6,()=>{

        gsap.to("body",{

            opacity:0,

            duration:.35,

            onComplete(){

                window.location.href="birthday.html";

            }

        });

    });

});