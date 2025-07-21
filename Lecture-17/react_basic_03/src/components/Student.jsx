function Student({naam}){
    return(
        <div>
            {
                naam.map((item)=>(
                        <h1> {item} </h1>
                    )
                )
            }
        </div>
    )
}

export default Student