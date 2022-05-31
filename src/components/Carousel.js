import { useState } from "react"

function Carousel(props){
    const [index, setIndex] = useState(0)

        return (
            <div className="carousel">
                <img src={props.images[index]} alt='element'/>

                <div>
                    <button className="button-4" onClick={() => {
                        if (index > 0) setIndex(index - 1);
                        }
                       }>Left</button>

                    <button className="button-4" onClick={() => {
                        if (index < props.images.length-1) setIndex(index + 1);
                        }    
                    }>Right</button>
                </div>
            </div>
        )
}

export default Carousel