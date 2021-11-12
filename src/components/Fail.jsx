import React from 'react'


const score = localStorage.getItem("score")

function Fail() {
    function again(e){
        if(e === null || e.key === "Enter" || e.key === " "){
            window.location = "game"
        }
    }
    window.document.addEventListener('keypress',e => again(e))
    return (
        <div>
            <title>Game over</title>
            <h1 className="gameOverText">Game over</h1>
            <h1>Score: {score}</h1>
            <button onClick={()=> again(null)}>Try again.</button>
        </div>
    )
}

export default Fail
