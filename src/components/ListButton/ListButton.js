const print = () => {
  console.log("stampa")
}

function ListButton() {
  return (
    <button onClick={print}>
      inserisci una task
    </button>
  )

}

export default ListButton;