let textEl = document.querySelector('.text');
let textString = textEl.textContent;
let charSpans = textString.split("").map((letter,i)=>{
    return `<span style="animation-duration:${Math.random()*5}s;
    filter:hue-rotate(${i*50}deg);">${letter}</span>`;
}).join("");

textEl.innerHTML=charSpans;

