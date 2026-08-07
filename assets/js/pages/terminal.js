const terminal = document.querySelector(".terminal");

const terminalBody = document.getElementById("terminal-body");

const lines = [

    {
        icon:">",
        text:"Initializing Birthday Project..."
    },

    {
        icon:"✓",
        text:"Loading Memories..."
    },

    {
        icon:"✓",
        text:"Checking Recipient..."
    },

    {
        icon:"✓",
        text:"Recipient Verified"
    },

    {
        icon:">",
        text:"Reading Favorite Color..."
    },

    {
        icon:"✓",
        text:"Blue"
    },

    {
        icon:">",
        text:"Reading Favorite Character..."
    },

    {
        icon:"✓",
        text:"Doraemon"
    },

    {
        icon:">",
        text:"Checking Relationship Status..."
    },

    {
        icon:"✓",
        text:"Someone Very Special ❤️"
    },

    {
        icon:">",
        text:"Rendering Birthday Letter..."
    }

];

gsap.from(terminal,{

    opacity:0,

    scale:.92,

    y:30,

    duration:.8,

    ease:"power3.out"

});

function sleep(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}

async function typeLine(icon,text){

    const line=document.createElement("div");

    line.className="line";

    terminalBody.appendChild(line);

    line.innerHTML=`${icon} <span class="typing"></span><span class="cursor"></span>`;

    const typing=line.querySelector(".typing");

    const cursor=line.querySelector(".cursor");

    for(let i=0;i<text.length;i++){

        typing.textContent+=text.charAt(i);

        await sleep(45);

    }

    cursor.remove();

    terminalBody.scrollTop=terminalBody.scrollHeight;

}

async function startTerminal(){

    for(const item of lines){

        await typeLine(item.icon,item.text);

        await sleep(350);

    }

    await sleep(1000);

    gsap.to(".terminal",{

        opacity:0,

        scale:.95,

        duration:.7,

        ease:"power2.inOut",

        onComplete(){

            window.location.href="love-envelope.html";

        }

    });

}

setTimeout(() => {

    startTerminal();

}, 150);