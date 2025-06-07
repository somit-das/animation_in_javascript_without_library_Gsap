let textEl = document.getElementById("text");
let leafEl = document.getElementById("leaf");
let hil1El = document.getElementById("hill1");
let hil2El = document.getElementById("hill2");
let hil3El = document.querySelector("#hill3");
let hil4El = document.getElementById("hill4");
let hil5El = document.getElementById("hill5");

window.addEventListener('scroll',()=>{
    let val = window.scrollY;
    // textEl.style.top=`${val*1.2}px`;
    textEl.style.marginTop=`${val*1.2}px`; //for pushing accouring to scroll
    leafEl.style.top=`${val*-6.5}px`; // for changing according to scroll
    leafEl.style.left=`${val*5.5}px`;  
    hil1El.style.top=`${val*1.5}px`;
    hil4El.style.left=`${val*-1.5}px`;
    hil5El.style.left=`${val*1.5}px`;
})