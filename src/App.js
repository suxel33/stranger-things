import { useState } from 'react'
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import Profile from './routes/Profile';
import AddPost from './routes/AddPost';
import Register from './routes/Register';
import Post from './routes/Post';
import Login from './routes/Login';
import { logout } from './utils/auth'
import Title from './Components/Title'

function App() {
  const [token, setToken] = useState(window.localStorage.getItem('token'))
  const [posts, setPosts] = useState([]);

  return (
    <div className="app">
      <Title />
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      > 
      <Link className="link" to="/Home"> | Home | </Link> {" "}
        {!token ? <Link className="link" to="/login"> | Login | </Link> : null}
        {!token ? <Link className="link" to="/register"> | Register | </Link> : null}
        <Link className="link" to="/Post"> | Post | </Link> {" "}
        {token ? <Link className="link" to="AddPost">| Add a Post | </Link> : null}
        {token ? <Link className="link" to="/profile"> | Profile | </Link> : null }
        {token ? <button onClick={() => logout(setToken)}> | Logout | </button> : null}
      </nav>
      <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="profile" element={<Profile token={token}/>} />
          <Route path="Post" element={<Post posts={posts} setPosts={setPosts} token={token}/>} />
          <Route path="AddPost" element={<AddPost token={token}/>} />
          <Route path="register" element={<Register setToken={setToken}/>} />
          <Route path="login" element={<Login setToken={setToken}/>} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;