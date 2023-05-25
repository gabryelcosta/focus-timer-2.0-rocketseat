export default function (){

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const forest = new Audio("https://github.com/gabryelcosta/sons-projeto/blob/main/Floresta.wav?raw=true")
const rain = new Audio("https://github.com/gabryelcosta/sons-projeto/blob/main/Chuva.wav?raw=true")
const coffeshop = new Audio("https://github.com/gabryelcosta/sons-projeto/blob/main/Cafeteria.wav?raw=true")
const fireplace = new Audio("https://github.com/gabryelcosta/sons-projeto/blob/main/Lareira.wav?raw=true")

  function pressButton(){
    buttonPressAudio.play()
  }

  function timeEnd(){
    kitchenTimer.play()
  }

  function forestButtonPlay(){
    forest.play()
  }

  function forestButtonPause(){
    forest.pause()
  }

  function rainButtonPlay(){
    rain.play()
  }

  function rainButtonPause(){
    rain.pause()
  }

  function coffeshopButtonPlay(){
    coffeshop.play()
  }

    function coffeshopButtonPause(){
    coffeshop.pause()
  }

  function fireplaceButtonPlay(){
    fireplace.play()
  }

    function fireplaceButtonPause(){
    fireplace.pause()
  }

  return {
    pressButton,
    timeEnd,
    forestButtonPlay,
    forestButtonPause,
    rainButtonPlay,
    rainButtonPause,
    coffeshopButtonPlay,
    coffeshopButtonPause,
    fireplaceButtonPlay,
    fireplaceButtonPause
  }
}