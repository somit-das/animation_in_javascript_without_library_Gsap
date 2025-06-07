let sectionEl = document.querySelector('section');
let j = 0;
while (j<200){
    let star = document.createElement('i');
    let x = Math.floor(Math.random()*window.innerWidth);
    let y = Math.floor(Math.random()*window.innerHeight);
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    let size = Math.random()*4;
    star.style.width = `${1+size}px`;
    star.style.height = `${1+size}px`;

    // twinkle animation duration set
    let duration = Math.random()*2;
    star.style.animationDuration= `${1+duration}s`
    sectionEl.appendChild(star)
    j++;
}