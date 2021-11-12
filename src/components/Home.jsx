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
        </div>
    )
}

export default Home