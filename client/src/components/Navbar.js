import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        {"    "}
        <Link to="/auth">Sign In</Link>
    </div>
  )
}

export default Navbar