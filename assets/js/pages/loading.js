let progress = 0;

const checkpoints = [
    0,
    20,
    40,
    65,
    90,
    100
];

function updateSubtitle(progress){

    if(progress<20){

        subtitle.textContent=subtitles[0];

    }

    else if(progress<40){

        subtitle.textContent=subtitles[1];

    }

    else if(progress<65){

        subtitle.textContent=subtitles[2];

    }

    else if(progress<90){

        subtitle.textContent=subtitles[3];

    }

    else{

        subtitle.textContent=subtitles[4];

    }

}

const loadingAnimation = setInterval(()=>{

    progress++;

    gsap.to(progressBar,{
        width:progress+"%",
        duration:.18,
        ease:"power1.out"
    });

    progressText.textContent = progress + "%";

    const capybara = document.getElementById("capybara");
    const girl = document.querySelector(".girl");
    const characterArea = document.querySelector(".character-area");

    // posisi girl relatif terhadap character area
    const girlLeft = girl.offsetLeft;

    // lebar wrapper capybara
    const capybaraWidth = capybara.offsetWidth;

    // beri jarak agar tidak menabrak
    const gap = 12;

    // titik berhenti capybara
    const stopPosition = girlLeft - capybaraWidth + gap;

    gsap.to(capybara,{

        x:(progress / 100) * stopPosition,

        duration:.08,

        ease:"none"

    });

    gsap.to(".girl",{

        scale:1.03,

        duration:.35,

        repeat:1,

        yoyo:true,

        overwrite:"auto"

    });

    updateSubtitle(progress);

    if(progress >=100){

        clearInterval(loadingAnimation);

        gsap.to("#birthday-text",{

            opacity:1,

            y:0,

            duration:.7,

            ease:"power2.out"

        });

        setTimeout(()=>{

            showVerification();

        },1800);

    }

},70);

gsap.from(".glass-card",{
    y:40,
    opacity:0,
    duration:1,
    ease:"power3.out"
});

gsap.from("h1",{
    y:20,
    opacity:0,
    duration:.8
});