import logo from "./img/dc-logo.png"
function App() {


  return (
    <>
      <header>
        <img width={70} src={logo} alt="Logo" />
        <nav className="nav justify-content-center  ">
          <a className="nav-link" href="#"><strong>CHARACTERS</strong></a>
          <a className="nav-link" href="#"><strong>COMICS</strong></a>
          <a className="nav-link" href="#"><strong>MOVIES</strong></a>
          <a className="nav-link" href="#"><strong>TV</strong></a>
          <a className="nav-link" href="#"><strong>GAMES</strong></a>
          <a className="nav-link" href="#"><strong>COLLECTIBLES</strong></a>
          <a className="nav-link" href="#"><strong>VIDEOS</strong></a>
          <a className="nav-link" href="#"><strong>FANS</strong></a>
          <a className="nav-link" href="#"><strong>NEWS</strong></a>
          <a className="nav-link" href="#"><strong>SHOPS</strong></a>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </>
  )
}

export default App
