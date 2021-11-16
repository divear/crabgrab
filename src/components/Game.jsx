import React, { useEffect, useRef, useState } from 'react'
import alien from "./imgs/alien.png"
import alien1 from "./imgs/alien1.png"
import alien2 from "./imgs/alien2.png"
import player from "./imgs/crab.png"


const l = Math.floor(Math.random() * 50);
const canvasColor = 'hsl(240, 50%,' + l + '%)';
var score = 0
const inter = 200

const enemyImg = new Image()
const aliens = {
  0: alien,
  1: alien1,
  2: alien2
}
enemyImg.src = aliens[Math.floor(Math.random()*4)]

const playerImg = new Image()
playerImg.src = player


const blockSize = 50
var size = Math.round(window.innerWidth-10)
if(window.innerWidth < 800){
  size = Math.round(window.innerWidth-100)
}

var height = window.innerHeight -50
var playerCoords = {
  x: Math.round(size/50)*25,
  y: 700
}
var enemyCoords = {}


function Game() {
    const canvasRef = useRef(null)
    console.log("cau")
    //initial draw
    const draw = (c) => {
      c.fillStyle = "#378f83"
      c.drawImage(playerImg, playerCoords.x,playerCoords.y,blockSize,blockSize)
      c.fillStyle = "red"

      enemyCoords = {
        x: Math.round(Math.random()*size/50)*50,
        y: 0
      }
      c.drawImage(enemyImg, enemyCoords.x,enemyCoords.y,blockSize,blockSize)

      
      setInterval(() => {

        c.fillStyle = "red"
        c.clearRect(enemyCoords.x,enemyCoords.y,blockSize,blockSize)
        enemyCoords = {
          x: enemyCoords.x,
          y: enemyCoords.y + blockSize
        }
        if(enemyCoords.y > height){
          localStorage.setItem("score", score)
          window.location = "fail"
          return
        }

        if(JSON.stringify(enemyCoords) === JSON.stringify(playerCoords)){
          catched()
          return
        }

        c.drawImage(enemyImg, enemyCoords.x,enemyCoords.y,blockSize,blockSize)
      }, inter);
      
    }
    function catched(){
      enemyImg.src = aliens[Math.floor(Math.random()*4)]      
      enemyCoords = {
        x: Math.round(Math.random()*size/50)*50,
        y: 0
      }
      score++
    }
    function move(e){
      const canvas = canvasRef.current
      const c = canvas.getContext('2d');
      c.clearRect(playerCoords.x, playerCoords.y, blockSize, blockSize);
  
      switch(e.key || e){
        case "a":
        case "A":
          if(playerCoords.x <= 0) {
            playerCoords.x = size 
          }
          playerCoords.x -= blockSize
          break;
        case "d":
        case "D":
          if(playerCoords.x >= size-50) {
            playerCoords.x = -50
          }
          playerCoords.x += blockSize
          break;
        default:
          break
        }
        c.fillStyle = "#378f83"
       c.drawImage(playerImg, playerCoords.x,playerCoords.y, blockSize, blockSize);

      if(JSON.stringify(enemyCoords) === JSON.stringify(playerCoords)){
        catched()
        return;
      }
      
    }
    useEffect(() => {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      window.document.addEventListener('keypress',e => move(e, context))
      draw(context)
    }, [])
    return (
        <div className="game">
        <title>Catch game</title>
        <canvas
        style={{backgroundColor: canvasColor}}
        id="canvas"
        ref={canvasRef}
        width={size}
        height={height}
        />
        </div>
    )
}

export default Game
