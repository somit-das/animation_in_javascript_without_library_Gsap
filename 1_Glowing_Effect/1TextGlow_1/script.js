const textEl = document.querySelector(".cText");
const textString = textEl.textContent;
const charArr = textString.split("");
const spansArr = charArr.map((letter,i)=>{
    return `<span style="transition-delay:${i*20}ms; 
    filter:hue-rotate(${i*20}deg);
    // grayscale(${i*20}%) 
    // drop-shadow(16px 16px 20px red) invert(${i*20}%);
    ">${letter}<span>`;
})
const spanJoined = spansArr.join("")
textEl.innerHTML = spanJoined;
console.log(spanJoined)