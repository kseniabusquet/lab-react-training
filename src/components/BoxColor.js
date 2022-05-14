function BoxColor(props) {

        let textColor = ""
        const hex = RGBToHex(props.r, props.g, props.b)
        if (hex === "#ff0000") textColor = "#ffffff"
        else textColor = "#000000"


    return (
        <div className = "ID-card-wrapper" style={{
            backgroundColor: hex, justifyContent:"center", color: textColor
          }}>
            <p style={{textAlign:"center"}} >
                rgb({props.r}, {props.g}, {props.b}) <br />{hex}</p>
        </div>
    )
}

function RGBToHex(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length === 1)
      r = "0" + r;
    if (g.length === 1)
      g = "0" + g;
    if (b.length === 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }
  
export default BoxColor;