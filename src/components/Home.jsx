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

            <p>Move with A and D, press <span className="symbol">+</span> to increase the speed <span className="symbol">-</span> to decrease it.</p>
        </div>
    )
}

export default Home