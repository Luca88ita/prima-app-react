import Navbar from "../Navbar/Navbar";

function Header() {
  return(
    <> {/* questo è un tag fragment */}
      <header>
        <Navbar/>
        <h2>sono l'header</h2>
      </header>
    </>
  )
}

export default Header;