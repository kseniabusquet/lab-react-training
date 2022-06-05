function NumbersTable(props){

    const numbers = new Array(props.limit)
    for (var i = 0; i < props.limit; i++){
        numbers[i] = i+1
    }

    const rows = [...Array( Math.ceil(numbers.length / 5) )];

    const numberRows = rows.map( (row, index) => numbers.slice(index * 5, index * 5 + 5) );

    const content = numberRows.map((row, index) => (
        <div className="row" key={index}>   
          { row.map( number => {
          
          if (number%2 === 0) return <td style={{backgroundColor: 'red'}} key={number} className="table-cell">{ number }</td>
          else return <td key={number} className="table-cell">{ number }</td>  
          })}
        </div> )
    );


    return(
        <div className="list">
            {content}
        </div>
    )
}

export default NumbersTable