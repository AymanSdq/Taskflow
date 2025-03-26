import { Link } from "react-router"
import { ModeToggle } from "./components/mode-toggle"

function App() {


  return (
      <section>
        <button><Link to="/register">Register</Link></button>
        Or
        <button><Link to="/Login">Login</Link></button>
      </section>
  )
}

export default App
