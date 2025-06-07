let sectionEL = document.querySelectorAll("section");
// window.addEventListener('scroll',()=>{
//     section
// })
sectionEL[0].classList.add('show-animate');
window.onscroll = ()=>{
    sectionEL.forEach(section=> {
        let scrollDistance = window.scrollY; // scrollDistance stores the distance of scrolling (from top of screen how much we have scrolled)
        let sectionDistance = section.offsetTop; // sectionDistance stores distance from the outer border (here in this case  body top postion) to   the current element (including its margin) to the top

        if(scrollDistance >= sectionDistance - 150){
          
            section.classList.add("show-animate"); 
        }
        else{
                section.classList.remove("show-animate");
           
        }
    })
}
