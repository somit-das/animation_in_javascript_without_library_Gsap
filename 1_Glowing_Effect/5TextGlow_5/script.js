const textEl = document.querySelector(".cText");
const text = "Hello World It's Jarvis";

const spans = text.split("").map((letter,i)=>{
    return `<span style="transition-delay:${i*20}ms; filter:hue-rotate(${i*10}deg);">${letter}</span>`
}).join("")
textEl.innerHTML = spans;
console.log(spans);