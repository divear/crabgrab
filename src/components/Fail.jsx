import React from 'react'
const bestScore = localStorage.getItem("bestScore")
const score = localStorage.getItem("score")
const previousBest =  localStorage.getItem("previousBest")

function Fail() {
    function again(e){
        if(e === null || e.key === "Enter" || e.key === " "){
            window.location = "game"
        }
    }
    window.document.addEventListener('keypress',e => again(e))
    return (
        <div className="gameOverText">
            <title>Game over</title>
            <h1 className="gameOverbigText">Game over</h1>
            <h1>Score: {score}</h1>
            <p>{bestScore === score ? "Previous b" : "B"}est score: {bestScore === score ? previousBest : bestScore}</p>
            <button onClick={()=> again(null)}>Try again.</button>
        </div>
    )
}

export default Fail
