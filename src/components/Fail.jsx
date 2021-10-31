import React from 'react'

function Fail() {
    return (
        <div>
            <title>Game over</title>
            <h1>Game over</h1>
            <button onClick={()=>window.location = "game"}>Try again.</button>
        </div>
    )
}

export default Fail
