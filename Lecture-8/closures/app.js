

function abc(){
    var a = 10;
    let b = 20;
    const c = 30;

    function def(){
        console.log(a);
        console.log(c); 
    }
    return def

}

let returnedFn = abc()

console.log(a); //lexical scope
console.log(c); //lexical scope


returnedFn() //closure






