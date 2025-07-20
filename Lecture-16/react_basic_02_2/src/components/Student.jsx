function Student({name,age}){
    return(
        <div>
            <h2>Name:{name} </h2>
            <h2>Age:{age} </h2>
        </div>
    )
}
export default Student;

// -----------------------------

// function Student(props){
//     return(
//         <div>
//             <h2>Name:{props.name} </h2>
//             <h2>Age:{props.age} </h2>
//         </div>
//     )
// }
// export default Student;