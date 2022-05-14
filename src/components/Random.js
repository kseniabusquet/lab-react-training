function Random(props) {

    const min = props.min
    const max = props.max
    const randomNum = generateRandom(min, max)
    console.log(randomNum)
    console.log(typeof(randomNum))

    return (
        <div className = "ID-card-wrapper">
          <p>Random value between {min + 1} and {max} is {randomNum}</p>
        </div>
    )
  }

  function generateRandom(min, max) {

    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand;
}
  
export default Random;