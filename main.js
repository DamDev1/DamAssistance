const microphone = document.querySelector(".microphone")
const content = document.querySelector(".message")
const UserMfName = document.querySelector(".UserMfName")


            //////Getting user name 
window.addEventListener("load", () => { 

    if(localStorage.getItem("name") === null){
        const userName = prompt("input your name for the first time")
        localStorage.setItem("name", userName)
        location.reload()
    }
})

UserMfName.textContent = localStorage.getItem("name")

////Getting the Date and time
const date = new Date();

const days = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[date.getDay()];

const dayNum = date.getDate();


 //////getting the month
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let month = months[date.getMonth()] 

const year = date.getFullYear()

const hour = date.getHours();
const min = date.getMinutes();


console.log(hour)

// document.querySelector("#demo").innerHTML = month

// console.log(localStorage.getItem("name"))
// const userName = prompt("What name should i be calling you")
let p = document.createElement("p")

const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition;
recognition.interimResults = true;

recognition.addEventListener("result", (e) =>{
    const outputVoice = Array.from(e.results)
        .map(results => results[0])
        .map(results => results.transcript)
        .join()
    p.textContent = outputVoice;
    content.appendChild(p)
            //////Greeting section
    if(e.results[0].isFinal){

        if(outputVoice.includes("how have you been")){
            p = document.createElement("p")
            p.classList.add("reply")
            p.innerHTML = greeting[Math.floor(Math.random() * greeting.length)];
            content.appendChild(p)
            ReplyWords(p.innerHTML)
        }

        p = document.createElement("p")
    }

    if(e.results[0].isFinal){
        if(outputVoice.includes("hey Google")){
            p = document.createElement("p")
            p.classList.add("reply")
            p.innerHTML = greeting[Math.floor(Math.random() * greeting.length)];
            content.appendChild(p)
            ReplyWords(p.innerHTML)
        }

        p = document.createElement("p")
    }

    if(e.results[0].isFinal){
        if(outputVoice.includes("date")){
            p = document.createElement("p")
            p.classList.add("reply")
            p.innerHTML = `it's ${day} ${dayNum} of ${month} ${year}`;
            content.appendChild(p)
            ReplyWords(p.innerHTML)
        }

        p = document.createElement("p")
    }

    if(e.results[0].isFinal){
        if(outputVoice.includes("time")){
            p = document.createElement("p")
            p.classList.add("reply")
            let showTime = "";
            if(hour < 12){
                showTime = ` ${hour}:${min}AM`;
            }else{
                showTime = ` ${hour}:${min}PM`;
            }
            p.innerHTML = showTime;
            content.appendChild(p)
            ReplyWords(p.innerHTML)
        }

        p = document.createElement("p")
    }



                ///Opening other webs
    if(e.results[0].isFinal){
        if(outputVoice.includes("open YouTube")){
            p = document.createElement("p")
            p.classList.add("reply")
            content.appendChild(p)
            p.innerHTML = "Opening YouTube";
            ReplyWords(p.innerHTML)
            window.open(`https://www.youtube.com`)  
            console.log(realName)
        }

        p = document.createElement("p")
    }

    if(e.results[0].isFinal){
        if(outputVoice.includes("open TiK ToK")){
            p = document.createElement("p")
            p.classList.add("reply")
            content.appendChild(p)
            p.innerHTML = "Opening YouTube";
            ReplyWords(p.innerHTML)
            window.open(`https://www.tiktok.com`)  
            console.log(realName)
        }

        p = document.createElement("p")
    }


    ///////GETTING USER
    if(e.results[0].isFinal){
        if(outputVoice.includes("what's my name")){
            p = document.createElement("p")
            p.classList.add("reply")
            content.appendChild(p)
            const realName = localStorage.getItem("name")
            p.innerHTML = `Your are ${realName}, that's what you told me any way`;
            ReplyWords(p.innerHTML)  
            console.log(realName)
        }

        p = document.createElement("p")
    }
        ////////////////// Sad Section///////
    if(e.results[0].isFinal){
        if(outputVoice.includes("I'm sad")){
            p = document.createElement("p")
            p.classList.add("reply")
            p.innerHTML = sad[Math.floor(Math.random() * sad.length)];
            content.appendChild(p)
            ReplyWords(p.innerHTML)
        }

        p = document.createElement("p")
    }

    console.log(e)
})

function ReplyWords(sentences){
    const speech = new SpeechSynthesisUtterance();

    speech.text = sentences
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech)
}

microphone.addEventListener("click", () =>{
    recognition.start()
})

// recognition.addEventListener("end", () => {
//     recognition.start()
// })