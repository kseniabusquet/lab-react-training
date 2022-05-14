function IdCard(props) {

  const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric'};
  const birthDate = props.birth.toLocaleDateString("en-US", options);
  const withoutComma = birthDate.replaceAll(',', '');


    return (
      <div className = "ID-card-wrapper">
          <img src = {props.picture} alt = "profile"/>
            <p>
              <b>First name: </b>{props.firstName} <br />
              <b>Last name: </b>{props.lastName} <br />
              <b>Gender: </b>{props.gender} <br />
              <b>Height: </b>{props.height/100}m <br />
              <b>Birth: </b>{withoutComma}<br />
            </p>
      </div>
    );
  }
   
  export default IdCard;