// select image                   4s
// add filter to image            2s
// add caption to filtered image  5s
// upload captioned image         3s


function step1(fn){
    console.log(`please wait i am selecting Image`);
    
    setTimeout(()=>{
        fn("Selected Image")
    } , 4000)
}


function step2(image,fn){
    console.log(`please wait adding filter to the ${image}`);
    
    setTimeout(()=>{
        console.log('filter added');
        fn("Filtered image")
    } , 2000)
}

function step3(filter , fn){
    console.log(`please wait adding caption to the ${filter}`);
    
    setTimeout(()=>{
        console.log('caption added');
        fn("Captioned image")
    } , 5000)
}

function step4(caption){
    console.log(`finally uploading the ${caption}`);
    
    setTimeout(()=>{
        console.log('IMAGE UPLOADED');
    } , 3000)
}


// callback hell
step1( function(image){ 
    console.log(image) 
    step2(image , function(filter){
        console.log(filter);
        step3(filter , function(caption){
            console.log(caption);
            step4(caption) 
        } )
    } )
} )


