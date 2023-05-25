import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonDecrease,
  buttonForestOn,
  buttonForestOff,
  buttonRainOn,
  buttonRainOff,
  buttonCoffeshopOff,
  buttonCoffeshopOn,
  buttonFireplaceOff,
  buttonFireplaceOn
} from "./elements.js"

export default function ({controls, timer, sound})
{
buttonPlay.addEventListener('click', function(){
  controls.play()
  timer.countDown()
  sound.pressButton()
})

buttonPause.addEventListener('click', function(){
  controls.pause()
  timer.hold()
  sound.pressButton()
})

buttonStop.addEventListener('click', function(){
  controls.reset()
  timer.reset()
  sound.pressButton()
})

buttonAdd.addEventListener('click', function(){
  timer.addFiveMinutes()
  sound.pressButton()
})

buttonDecrease.addEventListener('click', function(){
  timer.decreaseFiveMinutes()
  sound.pressButton()
})

buttonForestOff.addEventListener('click', function(){
  buttonForestOff.classList.add('hide')
  buttonForestOn.classList.remove('hide')
  sound.forestButtonPlay()
  sound.pressButton()
})

buttonForestOn.addEventListener('click', function(){
  buttonForestOff.classList.remove('hide')
  buttonForestOn.classList.add('hide')
  sound.forestButtonPause()
  sound.pressButton()
})


buttonRainOff.addEventListener('click', function(){
  buttonRainOff.classList.add('hide')
  buttonRainOn.classList.remove('hide')
  sound.rainButtonPlay()
  sound.pressButton()
})

buttonRainOn.addEventListener('click', function(){
  buttonRainOff.classList.remove('hide')
  buttonRainOn.classList.add('hide')
  sound.rainButtonPause()
  sound.pressButton()
})

buttonCoffeshopOff.addEventListener('click', function(){
  buttonCoffeshopOff.classList.add('hide')
  buttonCoffeshopOn.classList.remove('hide')
  sound.coffeshopButtonPlay()
  sound.pressButton()
})

buttonCoffeshopOn.addEventListener('click', function(){
  buttonCoffeshopOff.classList.remove('hide')
  buttonCoffeshopOn.classList.add('hide')
  sound.coffeshopButtonPause()
  sound.pressButton()
})

buttonFireplaceOff.addEventListener('click', function(){
  buttonFireplaceOff.classList.add('hide')
  buttonFireplaceOn.classList.remove('hide')
  sound.fireplaceButtonPlay()
  sound.pressButton()
})

buttonFireplaceOn.addEventListener('click', function(){
  buttonFireplaceOff.classList.remove('hide')
  buttonFireplaceOn.classList.add('hide')
  sound.fireplaceButtonPause()
  sound.pressButton()
})
}