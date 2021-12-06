var cel = document.getElementById('cel');
var far = document.getElementById('far');




cel.addEventListener('input',()=>{
    let c = cel.value;
    let f = (c * 9/5)+32;
    if(!Number.isInteger(f)){
        f = f.toFixed(4);
    }
    far.value = f;
   
    
})
far.addEventListener('input',()=>{
    let f = far.value;
    let c = (f - 32) * 5/9;
    if(!Number.isInteger(c)){
        c = c.toFixed(4);
    }
    cel.value = c;
   

})