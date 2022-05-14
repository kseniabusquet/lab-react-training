function Rating(props) {

const rating = Math.ceil(props.children)

return (
    <div>
         {rating === 0 && <p className = "Stars">☆☆☆☆☆</p>}
         {rating === 1 && <p className = "Stars">★☆☆☆☆</p>}
         {rating === 2 && <p className = "Stars">★★☆☆☆</p>}
         {rating === 3 && <p className = "Stars">★★★☆☆</p>}
         {rating === 4 && <p className = "Stars">★★★★☆</p>}
         {rating === 5 && <p className = "Stars">★★★★★</p>}
    </div>
 ) ;

}
  
export default Rating;