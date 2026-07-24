import React, { useState } from "react";


const userData = {
  name: "Elmer Alvarado",
  avatarUrl: "https://i.pravatar.cc/100", // sample avatar
  bio: "Appdev1 instructor.",
  skills: ["React", "JavaScript", "HTML", "CSS"],
  isOnline: true,
  lastUpdated: "2 hours ago",
};

function UserProfileCard({ user }) {
  const [messageCount, setMessageCount] = useState(0);

  function handleSendMessage() {
    setMessageCount(messageCount + 1);
  }

  function handleReset() {
    setMessageCount(0);
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