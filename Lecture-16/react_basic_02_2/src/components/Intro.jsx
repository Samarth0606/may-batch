function Intro({name,age,number,favColor}){
    

    return(
        <div style={{border:"2px solid black", backgroundColor:"yellow"}} >
            <h1>Name: {name} </h1>
            <h1>Age: {age}</h1>
            <h1>Number: {number}</h1>
            <h1>favColor: {favColor}</h1>
        </div>
    )
}

export default Intro;

// ----------------------------------------------

// function Intro(props){

//     // console.log(props); //object
//     // console.log(props.name);
//     // console.log(props.age);
//     // console.log(props.number);
//     // console.log(props.favColor);
    

//     return(
//         <div style={{border:"2px solid black", backgroundColor:"yellow"}} >
//             <h1>Name: {props.name} </h1>
//             <h1>Age: {props.age}</h1>
//             <h1>Number: {props.number}</h1>
//             <h1>favColor: {props.favColor}</h1>
//         </div>
//     )
// }

// export default Intro;