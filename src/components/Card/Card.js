import Button from "../Button/Button";
import "./Card.css"
//import coffepic from "./coffee ice cream.png"
/* import starsvg from "./Star.svg" */
import cartsvg from "./Cart.svg"
import { ReactComponent as StarReact} from "./Star.svg"

function Card({theme, title, price, coffeepic, visibility}) {
  return(
    <div className={"coffe-box "+theme} >
      <img src={coffeepic.src} alt={coffeepic.alt}/>
      <div className="rating-background">
        <div className="coffe-rating">4.8    
          {/* <img src={starsvg} alt="star"/> */}
          <StarReact className="star"/>
        </div>
      </div>
      <div className="under-coffe-picture">
        <h3 className="coffe-type">{title}{/* Coffe Ice Cream */}</h3>
        <h3 className="coffe-like">{price}</h3>
      </div>
      <div className="under-coffe-picture">
        <span className="coffe-description">Coffee with ice cream vanilla</span>
        {visibility ? <Button><img className="cart" src={cartsvg} alt="add to the cart"/></Button>:null}
        {/* <Button><img className="cart" src={cartsvg} alt="cart"/></Button> */}
      </div>  
    </div>
  )
}

export default Card;