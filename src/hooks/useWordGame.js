import { useState, useEffect, useRef } from "react"

function useWordGame(starting_time = 10) {

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(starting_time)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ")
    const filteredWords = wordsArr.filter(word => word !== "")
    return filteredWords.length
  }

  function startGame(){
    setIsTimeRunning(true)
    setTimeRemaining(starting_time)
    setText("")
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  function endGame() {
    setIsTimeRunning(false)
    setWordCount(calculateWordCount(text))
  }
  
  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0){
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else if(timeRemaining === 0){
      endGame()
    }
    
  }, [timeRemaining, isTimeRunning])

  return {textBoxRef, text, handleChange, isTimeRunning, timeRemaining, startGame, wordCount}
}
export default useWordGame
