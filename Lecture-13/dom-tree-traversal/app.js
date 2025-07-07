let ul = document.querySelector('#ref');



console.log(ul);
console.log( ul.parentElement );
console.log( ul.parentElement.parentElement );
console.log( ul.parentElement.parentElement.previousElementSibling );
console.log( ul.parentElement.parentElement.previousElementSibling.children[0] );
console.log( ul.parentElement.parentElement.previousElementSibling.children[0].children );
console.log( ul.parentElement.parentElement.previousElementSibling.children[0].children[0] );

ul.parentElement.parentElement.previousElementSibling.children[0].children[0].style.color = "red"

ul.parentElement.parentElement.previousElementSibling.children[0].children[0].nextElementSibling.style.color = "green"
ul.parentElement.parentElement.previousElementSibling.children[0].children[0].nextElementSibling.style.backgroundColor = "yellow"