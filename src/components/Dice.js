import { useState } from "react"
import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'


function Dice(){
    const diceSet = [dice1, dice2, dice3, dice4, dice5, dice6]
    const[dice, setDice] = useState(getRandomDice(diceSet))

    function getRandomDice(arr){
        return arr[Math.floor(Math.random()*arr.length)]
    }

    function toggleDice(){
        let randomDice = getRandomDice(diceSet)
        setDice(diceEmpty)

        setTimeout(() => {
            setDice(randomDice)
          }, "1000")
    }

    return (
        <div className='dice-picture'>
            <img src={dice} alt='dice' onClick={toggleDice}/>
        </div>
    )
}

export default Dice