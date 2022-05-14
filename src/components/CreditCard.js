//TO DO: align divs in a row

import visa from '../assets/images/visa.png';
import mastercard from "../assets/images/master-card.svg"

function CreditCard(props) {

    const ccNumber = props.number
    const lastFour = ccNumber.substr(ccNumber.length - 4);

    return (
        <div className = 'Card-Wrapper' style={{backgroundColor: props.bgColor, color: props.color}}>     
                <div className = "Card-Type">
                    {props.type === "Master Card" && <img src = {mastercard} alt = "mastercard"/>}      
                    {props.type === "Visa" && <img src = {visa} alt = "visa"/>} 
                </div>
                <div className = "Number"><b>•••• •••• •••• {lastFour}</b></div>
                  <div className = "Expiration">
                    {props.expirationMonth < 10 && <span>Expires 0{props.expirationMonth}/{props.expirationYear}</span>}
                    {props.expirationMonth >= 10 && <span>Expires {props.expirationMonth}/{props.expirationYear}</span>}
                    <span className = "Bank-Name">{props.bank}</span>     
                  </div>
                <div className = "Owner">{props.owner}</div>  
        </div>
      );
}
  
export default CreditCard;