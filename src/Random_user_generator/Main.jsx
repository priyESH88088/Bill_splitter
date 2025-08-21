import { useEffect, useState } from "react";
import axios from "axios";

function Main() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getRandomData();
  }, []);

  async function getRandomData() {
    try {
      const result = await axios.get("https://randomuser.me/api/");
      const data = result.data.results[0];

      setUser({
        name: `${data.name.first} ${data.name.last}`,
        image: data.picture.large,
        email: data.email,
        gender: data.gender,
        location: `${data.location.city}, ${data.location.country}`,
      });
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {user ? (
        <>
          <img
            src={user.image}
            alt={user.name}
            style={{ borderRadius: "50%", width: "150px" }}
          />
          <h3>{user.name}</h3>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Gender:</b> {user.gender}</p>
          <p><b>Location:</b> {user.location}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}

      <button
        onClick={getRandomData}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Get New User
      </button>
    </div>
  );
}

export default Main;
