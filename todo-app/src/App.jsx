// import { useEffect, useState } from "react";

// function App() {
//   const [healthStatus, setHealthStatus] = useState("Checking...");

//   useEffect(() => {
//     fetch("http://localhost:3000")
//       .then((res) => res.text())
//       .then((data) => setHealthStatus(data))
//       .catch(() => setHealthStatus("Failed to fetch health status"));
//   }, []);

//   return (
//     <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
//       <h1>Backend Health Check</h1>
//       <p>{healthStatus}</p>
//     </div>
//   );
// }

// export default App;
import { useEffect, useState } from "react";
import axios from "axios";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  const [healthStatus, setHealthStatus] = useState("Checking...");

  useEffect(() => {
    axios
      .get("http://localhost:3000/health")
      .then((response) => setHealthStatus(response.data))
      .catch(() => setHealthStatus("Failed to fetch health status"));
  }, []);

  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
