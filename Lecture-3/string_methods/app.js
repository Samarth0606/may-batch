// let str = "SamaRth VohrA";

// console.log( str.length );        //property
// console.log( str.toUpperCase() ); //methods
// console.log( str.toLowerCase() );
// console.log( str.charAt(2) );


// console.log( str.indexOf('h') );
// console.log( str.indexOf('vohra') ); // -1
// console.log( str.indexOf('VohrA') ); // 8

// -----------------------------------------------
// let str = "SamaRth VohrA";
// let newStr= str.toLowerCase() //samarth vohra

// let find = "voHra"
// let newFind= find.toLowerCase() //vohra

// console.log( newStr.includes(newFind) );
// console.log( newStr.includes("vOHRA") );
// -----------------------------------------------


// let str = "    SamaRth VohrA    ";
// console.log(str.trim().length);

// let str2 = "orange-banana-mango-apple-pineapple";

// console.log( str2.split("-") );

// -----------------------------------------

let str2 = "orange-banana,mango-apple,pineapple";

console.log( str2.replaceAll(',' , '-') );
console.log( str2.replaceAll(',' , '-').split('-') );
