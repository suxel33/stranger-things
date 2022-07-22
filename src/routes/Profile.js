import { useEffect, useState } from "react";
import { fetchProfile } from "../api";
import Logout from "../components/Logout";

export default function Profile({ token, username, setToken, setUsername }) {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const loadProfile = async () => {
      const profile = await fetchProfile(token);
      setProfiles(profile);
    };
    loadProfile();
  }, []);

  return (
    <>
      <h1 className="subtitle">Logged in {username}!</h1>
      <Logout token={token} setToken={setToken} setUsername={setUsername} />
      {profiles.map((profile) => {
        return (
          <div className="columnContainer" key={profile._id}>
            {profile.fromUser.username !== username ? (
              <h5 className="toFromMessage">
                You received a message about {profile.post.title}
              </h5>
            ) : (
              <h5 className="toFromMessage">
                You sent a message about {profile.post.title}
              </h5>
            )}
            <h4 className="message">"{profile.content}"</h4>
          </div>
        );
      })}
    </>
  );
}