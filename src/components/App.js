// create your App component here
import React, { useEffect, useState } from "react";


function App(){
    const [pet,setPet]=useState([])
    const[isloaded,setIsLoaded]=useState(false)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setPet(data)
            setIsLoaded(true)
        })
    },[])
    if(!isloaded) return <p>Loading...</p>;
    
    return(
        <div id="app">
            <img src={pet.message} alt="A Random Dog" />
        </div>
    )
}

export default App;