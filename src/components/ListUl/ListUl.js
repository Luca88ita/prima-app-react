import ListLi from "../ListLi/ListLi";
import datiCard from "../Card/dati.json";


function ListUl() {
  return (
      <ul>
        {datiCard.cards.map((elements) => (
          <ListLi title={elements.title}/>
        ))}
      </ul>
  )

}

export default ListUl;