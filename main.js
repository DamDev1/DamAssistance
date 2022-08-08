const microphone = document.querySelector(".microphone")
const content = document.querySelector(".message")

const userName = prompt("What name should i be calling you")

const UsernameOne = localStorage.setItem("name", userName)


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
        if(outputVoice.includes("what's my name")){
            p = document.createElement("p")
            p.classList.add("reply")
            content.appendChild(p)
            const realName = localStorage.getItem("name")
            p.innerHTML = realName;
            ReplyWords(p.innerHTML)  
            console.log(realName)
        }

        p = document.createElement("p")
    }

    if(e.results[0].isFinal){
        if(outputVoice.includes("what's my name")){
            p = document.createElement("p")
            p.classList.add("reply")
            content.appendChild(p)
            const realName = localStorage.getItem("name")
            p.innerHTML = realName;
            ReplyWords(p.innerHTML)  
            console.log(realName)
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