import Rating from "./Rating";

function DriverCard(props) {
    
    return (
        <div className = "Driver">
            <div className = "Center">
            <div className = "DriverPic">
              <img src = {props.img} alt = "driver"/>
            </div>
           
            <div className = "DriverInfo">
              <p>{props.name}</p>
              <Rating>{props.rating}</Rating>
              <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
            </div>
        </div>
    );
    
    }
      
    export default DriverCard;