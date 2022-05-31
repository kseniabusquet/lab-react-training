import {useState} from 'react'

function LikeButton(){
    const colours = ['purple','blue','green','yellow','orange','red']
    const [count, setCount] = useState(0)
    const [colourIndex, setColourIndex] = useState(0)

    function handleClick(colours){
        if (colourIndex < colours.length-1) setColourIndex(colourIndex+1)
        else setColourIndex(0)
        setCount(count+1)
    }

    return (
        <div>
            <button 
            style={{backgroundColor: colours[colourIndex]}} 
            className = "likeButton" 
            onClick={() => handleClick(colours)}>{count} Likes</button>
        </div>
    )
}

export default LikeButton