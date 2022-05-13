function Greetings(props) {

    return (
        <div className = "ID-card-wrapper">
        {props.lang === "de" && <p>Hallo {props.children}</p>}
        {props.lang === "fr" && <p>Bonjour {props.children}</p>}
        {props.lang === "en" && <p>Hello {props.children}</p>}
        {props.lang === "es" && <p>Hola {props.children}</p>}
        </div>
    )
}
  
export default Greetings;