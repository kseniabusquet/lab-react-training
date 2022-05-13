//import {format} from "date-fns";

function IdCard(props) {
  
    return (
      <div className = "ID-card-wrapper">
          <img src = {props.picture} alt = "profile"/>
          
            <p>
              <b>First name: </b>{props.firstName} <br />
              <b>Last name: </b>{props.lastName} <br />
              <b>Gender: </b>{props.gender} <br />
              <b>Height: </b>{props.height} <br />
              {/*<b>Birth: </b>{format}({props.birth}, "MMMM do, yyyy") <br />*/}
            </p>
            
          
      </div>
    );
  }
   
  export default IdCard;