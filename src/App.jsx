import logo from "./img/dc-logo.png"
function App() {


  return (
    <>
      <header>
        <img src={logo} alt="Logo" />
        <nav className="nav justify-content-center  ">
          <a className="nav-link active" href="#" aria-current="page">Active link</a>
          <a className="nav-link" href="#">Link</a>
          <a className="nav-link disabled" href="#">Disabled link</a>
          <a className="nav-link active" href="#" aria-current="page">Active link</a>
          <a className="nav-link" href="#">Link</a>
          <a className="nav-link disabled" href="#">Disabled link</a>
          <a className="nav-link active" href="#" aria-current="page">Active link</a>
          <a className="nav-link" href="#">Link</a>
          <a className="nav-link disabled" href="#">Disabled link</a>
          <a className="nav-link disabled" href="#">Disabled link</a>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </>
  )
}

export default App
