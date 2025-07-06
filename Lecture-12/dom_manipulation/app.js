
// selection
// let h1 = document.querySelector('h1');


// manipulation
// h1.textContent = "Samarth Vohra"
// h1.innerText = "<span>Samarth Vohra 2</span>"
// h1.innerHTML = "<span>Samarth Vohra 3</span>"


// --------------------------------------------------
// ATTRIBUTES

// selection
// let h1 = document.querySelector('h1');

// // manipulation
// console.log( h1.getAttribute('class') );
// console.log( h1.getAttribute('id') );

// h1.setAttribute('class' , 'sam vohra')


// let inp = document.querySelector('input');
// inp.setAttribute('type' , 'color')

// --------------------------------------------------

let id = setInterval(function(){
    console.log("hello");
} , 2000)

setTimeout(function(){
    clearInterval(id)
} , 30000)


