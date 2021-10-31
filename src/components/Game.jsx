import React, { useEffect, useRef } from 'react'


const l = Math.floor(Math.random() * 50);
const canvasColor = 'hsl(240, 50%,' + l + '%)';
var ec = 0

const blockSize = 50
var size = Math.round(window.innerHeight/140)*(blockSize*2.7)
var playerCoords = {
  x: Math.round(size/50)*25,
  y: 600
}
var enemyCoords = {}

function Game() {
    const canvasRef = useRef(null)

    //initial draw
    const draw = (c) => {
      c.fillStyle = "#378f83"
      c.fillRect(playerCoords.x,playerCoords.y,blockSize,blockSize)
      c.fillStyle = "red"

      enemyCoords = {
        x: Math.round(Math.random()*size/50)*50,
        y: 0
      }
      c.fillRect(enemyCoords.x,enemyCoords.y,blockSize,blockSize)

      
      setInterval(() => {
        c.fillStyle = "red"
        c.clearRect(enemyCoords.x,enemyCoords.y,blockSize,blockSize)
        enemyCoords = {
          x: enemyCoords.x,
          y: enemyCoords.y + blockSize
        }
        if(enemyCoords.y > size){
          window.location = "fail"
        }

        if(JSON.stringify(enemyCoords) === JSON.stringify(playerCoords)){
          enemyCoords = {
            x: Math.round(Math.random()*size/50)*50,
            y: 0
          }
          return
        }

        c.fillRect(enemyCoords.x,enemyCoords.y,blockSize,blockSize)
      }, 100);
    
      
    }
    function move(e){
      const canvas = canvasRef.current
      const c = canvas.getContext('2d');
      c.clearRect(playerCoords.x, playerCoords.y, blockSize, blockSize);
  
      switch(e.key || e){
        case "a":
        case "A":
          if(playerCoords.x <= 0) break
          playerCoords.x -= blockSize
          break;
        case "d":
        case "D":
          if(playerCoords.x >= size-50) break
          playerCoords.x += blockSize
          break;
        default:
          break
        }
        c.fillStyle = "#378f83"
       c.fillRect(playerCoords.x,playerCoords.y, blockSize, blockSize);
  
      
    }
    useEffect(() => {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      window.document.addEventListener('keypress',e => move(e, context))
      draw(context)
    }, [])
    return (
        <div>
        <title>Catch game</title>
        <canvas
        style={{backgroundColor: canvasColor}}
        id="canvas"
        ref={canvasRef}
        width={size}
        height={size}
        />
        </div>
    )
}

export default Game
