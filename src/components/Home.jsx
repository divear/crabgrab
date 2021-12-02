import React from 'react'

function Home() {
    function again(e){
        if(!e || e.key === "Enter" || e.key === " "){
            window.location = "game"
        }
    }
    window.document.addEventListener('keypress',e => again(e))
    return (
        <div>
            <title>Crab grab</title>
            <button onClick={()=> again(null)}>play</button>

            <p>Move with {window.innerWidth < 830 
            ? "clicking the sides of the screen" 
            : "A and D, press + to increase the speed - to decrease it."}</p>
        </div>
    )
}

export default Home