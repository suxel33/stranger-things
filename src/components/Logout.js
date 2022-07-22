import { useNavigate } from "react-router-dom";

const Logout = ({ token, setToken, setUsername }) => {
  const navigate = useNavigate();
  if (token) {
    return (
      < div className="creatingContainer">
          <button
        className="logoutButton"
        onClick={() => {
          window.localStorage.clear();
          setToken();
          setUsername('')
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
    );
  }
};

export default Logout;