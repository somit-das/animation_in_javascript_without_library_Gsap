function eyeballfunc(){
    var eye = document.querySelectorAll('.eye');
    eye.forEach((e)=>{
        //calculate center position of eye elements in x and y axis.
        console.log("getBoundingClientRect "+e.getBoundingClientRect()) //getBoundingClientRect gives position and size of element related viewport
        console.log("getBoundingClientRect left "+e.getBoundingClientRect().left)
        console.log("getBoundingClientRect top "+e.getBoundingClientRect().top)
        console.log("clientWidth :"+e.clientWidth) // clientWidth returns innerWidth of element
        let x = (e.getBoundingClientRect().left) + (e.clientWidth/2);
        let y = (e.getBoundingClientRect().top) + (e.clientWidth/2);

        //calculate the angle between mouse and eye to rotate the eye in correct direction
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let degree = radian*(180/Math.PI);
        let rotation = (degree*-1)+270; // degree is multiplied by -1 to flip the direction. as screen cordination system flipped vertically compared to standard mathematical way
        // added 270 meaning adding 270 deg to align starting point of rotation with the top. because in css 0 deg facing right 90 deg facing down 180 deg facing left and 270deg facing up
        console.log(rotation);


        // rotate the eyeball according to angle 
        e.style.transform = "rotate("+rotation+"deg)";


    })

}
document.querySelector('body').addEventListener('mousemove',(e)=>eyeballfunc(e))