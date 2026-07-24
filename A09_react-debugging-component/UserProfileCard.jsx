import React, { useState } from "react";
import "./style.css";

const userData = {
  name: "Brenan Lester P. Espeleta",
  avatarUrl: "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-1/461325086_122139019280325030_3747994068700561644_n.jpg?stp=c0.0.960.960a_dst-jpg_tt6&cstp=mx960x960&ctp=s200x200&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGhn6zq5kkwuqOAmz9UCQPTQkCOjK2BIENCQI6MrYEgQxMAXreiWjXUjyhU8IuIxXv5gSrXO4qkGSVtSHlFAzJq&_nc_ohc=Q7B6evlwG4sQ7kNvwFKyTp8&_nc_oc=Adr7v1LZ6Yp-L4m22z0ixXiePd2PufFdNGSksP28778Pk759a87Lwnq3i7bE6ojIC3w&_nc_zt=24&_nc_ht=scontent.fmnl30-1.fna&_nc_gid=I8BiPfUYVV_5V70TqiWyjw&_nc_ss=7b2a8&oh=00_AQANMg9PxXNgV5wdlHLSu-_LaquwBBUnGxRfSSRu39ehYQ&oe=6A68221D",
  bio: "Exploring cybersecurity, solving challenges, and building skills.",
  skills: ["Laravel", "PHP", "HTML", "CSS"],
  isOnline: false,
  lastUpdated: "1 minute ago",
};

function UserProfileCard({ user }) {
  const [messageCount, setMessageCount] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  function handleSendMessage() {
    setMessageCount(messageCount + 1);
  }

  function handleReset() {
    setMessageCount(0);
  }

  function handleFavoriteToggle() {
    setIsFavorited(!isFavorited);
  }

  return (
    <>
      <div className="profile-card">
        <img src={user.avatarUrl} alt={user.name} />

        <h2>{user.name}</h2>

        <label htmlFor="bio">Bio</label>
        <p id="bio">{user.bio}</p>

        <h3>Skills</h3>
        <ul>
          {user.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <div style={{ color: "blue", fontWeight: "bold" }}>
          Messages sent: {messageCount}
        </div>

        {user.isOnline ? <span>🟢 Online</span> : <span>⚪ Offline</span>}
        {user.isOnline && (
          <button onClick={handleFavoriteToggle}>
            {isFavorited ? "★ Favorited" : "☆ Favorite"}
          </button>
        )}

        <button onClick={handleSendMessage}>Send Message</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <p className="footer">Card last updated: {user.lastUpdated}</p>
    </>
  );
}

export default function App() {
  return <UserProfileCard user={userData} />;
}