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

            <p>Move with A and D to move, press 1-9 to increase the speed.</p>
        </div>
    )
}

export default Home