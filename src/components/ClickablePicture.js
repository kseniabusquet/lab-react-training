import {useState} from 'react'

function ClickablePicture(props){
    const [picture, setPicture] = useState(props.img)

    function togglePicture(){
        if (picture === props.img) setPicture(props.imgClicked)
        else setPicture(props.img)
    }

    return (
        <div className='clickable-picture-container'>
            
            <img className='clickable-picture' src={picture} alt ='clickable' onClick={() => togglePicture()}/>
        </div>
    )
}

export default ClickablePicture