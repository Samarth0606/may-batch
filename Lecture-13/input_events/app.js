
let inpEl = document.querySelector('input');

// inpEl.addEventListener('input' , ()=>{
//     console.log("input triggered");
// })

// -----------------------------------------

// inpEl.addEventListener('input' , (event)=>{
//     console.log(event);
//     console.log(event.target);
//     console.log(event.target.value);
//     console.log(event.target.value = "lolipop");
// })

// -----------------------------------------

inpEl.addEventListener('keydown' , (e)=>{
    console.log(e.target.value);
})  


