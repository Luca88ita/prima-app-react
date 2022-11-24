function Footer(props) {
  return(
    <> {/* questo è un tag fragment */}
      <footer>
        {props.children}
      </footer>
    </>
  )
}

export default Footer;