import { useState } from 'react';
import ListInput from '../ListInput/ListInput';
/* import ListButton from "../ListButton/ListButton";
import ListUl from '../ListUl/ListUl'; */


function ListMain() {
  let [arr, setArr] = useState([]);
  let str = "";
  const handleChange = (e) => {
    str = e.target.value;
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    let arrAppoggio = [...arr, str];
    setArr(arrAppoggio);
  }
  const print = () =>{
    console.log("stampa");
  }
  return (
    <main>
      <form action='' onSubmit={handleSubmit}>
        {/* <ListInput onChange={change}/> */}
        {/*<ListButton/> */}
        <input type='text' name='' id='inputList' onChange={handleChange}></input>
        <button type='submit' className='listBtn' onClick={print}>Add</button>
      </form>
      <div>
        <ul>
          {arr.map((value, index) =>(
            <li key={index}>{value}</li>
          ))}
        </ul>
        {/* <ListUl/> */}
      </div>
    </main>
  )

}

export default ListMain;