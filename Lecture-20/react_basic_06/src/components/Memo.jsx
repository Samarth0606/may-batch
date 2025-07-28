import { memo, useState } from "react";

function Memo({naam}){
    const [naaam,setNaaam] = useState(naam);
    function handleNaaam(){
        setNaaam(Math.floor(Math.random()*10))
    }
    return(
        <div>
            <Chotu name={naaam} />
            <button onClick={handleNaaam} >Change name</button>
            <Chotu name="MAV"/>
            <Chotu name="KASH"/>
            <Chotu name="AMUL"/>
        </div>
    )
}
const Chotu = memo(function({name}){
    return(
        <div>
            <h1>I am chotu: {name}</h1>
        </div>
    )
}
)

export default Memo;