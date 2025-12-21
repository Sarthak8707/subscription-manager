import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"])
    const navigate = useNavigate();
    const signOut = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/auth");
    }
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/create-sub">Create Subscription</Link>
        {"    "}
        { cookies.access_token ?  <button onClick={signOut}>Sign Out</button> : <Link to="/auth">Sign In</Link>}

    </div>
  )
}

export default Navbar