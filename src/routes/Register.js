
import { useNavigate } from "react-router-dom";
import { fetchRegister } from "../api";

const Register = ({ username, setUsername, password, setPassword }) => {
  const navigate = useNavigate();
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const authFormSubmitHandler = async (event) => {
    event.preventDefault();
    const data = await fetchRegister(username, password);
    if (data.success) {
      setPassword("");
      setUsername("");
      alert("You may now use your creditentials to login");
      navigate("/login");
    } else {
      alert(`${data.error.message}`);
    }
  };
  return (
    <>
      <h3 className="subtitle">Register</h3>
      <h6 className="subSubtitle">
      </h6>
      <form id="login" onSubmit={authFormSubmitHandler}>
        <label>Username</label>
        <input
          placeholder="username"
          id="username"
          type="text"
          value={username}
          onChange={usernameChangeHandler}
        />
        <label>Password</label>
        <input
          placeholder="password"
          id="pasword"
          type="password"
          value={password}
          minLength={5}
          onChange={passwordChangeHandler}
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Register;