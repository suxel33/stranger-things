import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";


import { Home, Profile, Login, NewPost, Register, Posts } from "./routes";



function App() {
  const [username, setUsername] = useState(
    window.localStorage.getItem("username")
  );
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  return (
    <div className="layout">
      <header>
        <div theme="dark" mode="horizontal">
          <Link className="nav" to="/">
            || Home | 
          </Link>
          <Link className="nav" to="/posts">
            | Posts | 
          </Link>
          {token ? (
            <Link className="nav" to="/new-post">
              | New Post |
            </Link>
          ) : null}
          {token ? (
            <Link className="nav" to="/profile">
              | Profile ||
            </Link>
          ) : null}
          {token ? null : (
            <Link className="nav" to="/register">
              Register
            </Link>
          )}
          {token ? null : (
            <Link className="nav" to="/login">
              Login
            </Link>
          )}
        </div>
      </header>
      <content className="contentBody">
        <div className="site-layout-content">
          <h1>SUSLIST</h1>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="profile"
            element={
              <Profile
                token={token}
                username={username}
                setToken={setToken}
                setUsername={setUsername}
              />
            }
          />
          <Route
            path="login"
            element={
              <Login
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                setToken={setToken}
              />
            }
          />
          <Route path="new-post" element={<NewPost token={token} />} />
          <Route
            path="register"
            element={
              <Register
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
              />
            }
          />
          <Route
            path="posts"
            element={<Posts token={token} username={username} />}
          />
        </Routes>
      </content>
      <footer
        style={{
          textAlign: "center",
        }}
      >
      </footer>
    </div>
  );
}

export default App;