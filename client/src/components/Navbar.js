import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const signOut = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/auth");
  };

  return (
    <nav
      style={{
        background: "#121212",
        borderBottom: "1px solid #2a2a2a",
        padding: "16px clamp(20px, 5vw, 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* Left: Brand / Links */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Link
          to="/"
          style={linkStyle}
        >
          Home
        </Link>

        <Link
          to="/create-sub"
          style={linkStyle}
        >
          Create Subscription
        </Link>
      </div>

      {/* Right: Auth action */}
      <div>
        {cookies.access_token ? (
          <button
            onClick={signOut}
            style={buttonStyle}
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/auth"
            style={linkStyle}
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

const linkStyle = {
  color: "#eaeaea",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 500,
  opacity: 0.85,
};

const buttonStyle = {
  background: "#2a2a2a",
  color: "#eaeaea",
  border: "1px solid #333",
  padding: "8px 14px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 500,
};

export default Navbar;
