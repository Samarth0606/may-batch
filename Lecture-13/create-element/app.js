

let ul = document.querySelector('ul');


// create
let listItem1 = document.createElement('li');
let listItem2 = document.createElement('li');
let listItem3 = document.createElement('li');
// console.log(listItem , "before");
listItem1.innerHTML = "Samarth Vohra 1"
listItem2.innerHTML = "Samarth Vohra 2"
listItem3.innerHTML = "Samarth Vohra 3"
// console.log(listItem , "after");


// ul.appendChild(listItem1 , listItem2) //single
ul.append(listItem1 , listItem2) //multiple
ul.prepend(listItem3) //multiple

// child directly
// listItem1.remove()
// listItem2.remove()

ul.removeChild(listItem1)
