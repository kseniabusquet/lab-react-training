import SingleColorPicker from "./SingleColorPicker"
import {useState} from "react"

function RGBColorPicker(){

const [value, setValue] = useState(0)

return (
    <div>
        <SingleColorPicker  
        color="r"
        value={value}
        onChange={ () => { 
            setValue(value)
         }
        }
        />

        <SingleColorPicker 
        color="g"
        value={value}
        onChange={ () => { 
            setValue(value)
        }}
        />

        <SingleColorPicker 
        color="b"
        value={value}
        onChange={ () => { 
        }}
        />
        <div className="flex-rgb-container">
            <div className="color-block"></div>
             <p>rgb(0, 0, 0)</p>   
            
        </div>
    </div>

)

}

export default RGBColorPicker