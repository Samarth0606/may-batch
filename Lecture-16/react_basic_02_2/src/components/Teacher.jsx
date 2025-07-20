function Teacher(props){
    return(
        <div>
            <h1>Name:{props.name}</h1>
            <h1>IsMale:{ JSON.stringify(props.isMale) }</h1>
        </div>
    )
}

export default Teacher;