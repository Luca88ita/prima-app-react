import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ListMain from '../ListMain/ListMain';
import ListV1 from '../ListV1/ListV1';
import ToDo from '../ToDo/ToDo';
function Layout() {
  return(
    <> {/* questo è un tag fragment */}
    {/* <Header>
      il testo inserito qui dentro viene ignorato perché non c'è un props.children nel componente Header
    </Header>
    <Main theme="dark"/>
    <Footer>
      ciao sono il footer
    </Footer> */}
    {/* <ListMain/> */}
    {/* <ListV1/> */}
    <ToDo/>
    </>
  )
}

export default Layout;