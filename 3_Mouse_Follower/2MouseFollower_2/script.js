function eyeballfunc(event){
    var eye = document.querySelectorAll('.eye');
    eye.forEach((e)=>{
        //calculate center position of eye elements in x and y axis.
        let x = (e.getBoundingClientRect().left) + (e.clientWidth/2);
        let y = (e.getBoundingClientRect().top) + (e.clientWidth/2);

        //calculate the angle between mouse and eye to rotate the eye in correct direction
        let radian = Math.atan2(x-event.pageX, y-event.pageY);
        let degree = radian*(180/Math.PI);
        let rotation = (degree*-1)+90;
        // console.log(rotation);

        // rotate the eyeball according to angle 
        e.style.transform = "rotate("+rotation+"deg)";


    })

}
document.querySelector('body').addEventListener('mousemove',(event)=>eyeballfunc(event))