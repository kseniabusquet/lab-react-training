function SingleColorPicker(props){

    const color = props.color

    console.log(props)

    return(
    
        <div className="flex-rgb-container">
            <div className="color-block" style={{backgroundColor: props.value}}></div>
            <p>{color.toUpperCase()}:</p>
             <input type = 'number'min={0} max={255} step={1} value = {props.value} onChange = {props.onChange}></input>           
        </div>
 )
}

export default SingleColorPicker