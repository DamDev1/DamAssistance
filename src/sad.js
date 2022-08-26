const sad = [
    "I care, even if I don’t understand",
    "You’re not alone in this. I may not understand exactly how you feel, but I care about you and want to help, Play me share up music"
]

const input = document.querySelector(".input")
const btn = document.querySelector(".send")

btn.addEventListener("click", () =>{
    window.open(`https://music.youtube.com/search?q=${input.value}`)
})