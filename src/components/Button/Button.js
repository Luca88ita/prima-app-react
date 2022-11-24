import "./Button.css"

function Button ({children}){
  return (
    <button className="cardButton">
      {children}
    </button>
  )
}

export default Button;