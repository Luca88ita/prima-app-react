import Card from "../Card/Card";
import "./Main.css"
import datiCard from "../Card/dati.json"

function Main(props) {
  let array = [1,2,3,4]
  let arrayStringhe = ["prova1","prova2"]
  return(
    <> {/* questo è un tag fragment */}
      <main className="cardMain">
{/*         {array}
        {arrayStringhe}
        {array.map((valore) => (
          <p>{valore}</p>
        ))} */}
        {datiCard.cards.map((elementi, index) => (
          <Card key={index} title={elementi.title} price={elementi.price} coffeepic={elementi.cover} visibility={elementi.visibility} theme={props.theme}/>
        ))}
{/*         <Card theme={props.theme}/>
        <Card theme="light"/> */}
      </main>
    </>
  )
}

export default Main;