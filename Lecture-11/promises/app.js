

// new Promise( ()=>{} )
let o1 = new Promise( function(resolve,reject){
    // let data = "I will pay you 50000"
    let error = "Hahahaha go away"
    resolve("I will pay you 50000");
    reject(error);
} )

// console.log(o1);

o1
.then( (data)=>{ console.log(data) } )
.catch( (error)=>{ console.log(error) } )
.finally( ()=>{ console.log("I will execute anyways") } )




function sam(kuchbhi){
    console.log(kuchbhi);
}

sam("hello")







