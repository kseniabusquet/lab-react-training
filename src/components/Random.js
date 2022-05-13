function Random(props) {

    const min = props.min - 1;
    const randomNum = Math.floor((Math.random() * (props.max - min)) + min);

    return (
        <div className = "ID-card-wrapper">
         <p>Random value between {props.min} and {props.max} is {randomNum}</p>
        </div>
    )
}
  
export default Random;