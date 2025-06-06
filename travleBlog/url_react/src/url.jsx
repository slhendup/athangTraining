import { useEffect, useState } from "react";

// const URL =
//   "http://api.weatherapi.com/v1/current.json?key=6e3e7364a22b495ba1d45205250206";

// const countries = [
//   "Bhutan",
//   "India",
//   "United States",
//   "United Kingdom",
//   "Canada",
//   "Australia",
//   "Japan",
//   "Germany",
//   "Brazil",
//   "South Africa",
// ];

// function App() {
//   const [setTemp] = useState(0);
//   const [country, setCountry] = useState("Bhutan");
//   const [tempC, setTempC] = useState(null);
//   const [tempF, setTempF] = useState(null);
//   const [unit, setUnit] = useState("F");

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await fetch(`${URL}&q=${country}&aqi=no`);
//       result.json().then((json) => {
//         setTemp(json.current.temp);
//       });
//       const response = await fetch(`${URL}&q=${country}&aqi=no`);
//       const data = await response.json();
//       setTempC(data.current.temp_c);
//       setTempF(data.current.temp_f);

//       console.error("Error fetching weather data:", error);
//       setTempC(null);
//       setTempF(null);
//     };

//     fetchData();
//   }, [country]);

//   return (
//     <div className="App">
//       <select
//         id="country-select"
//         value={country}
//         onChange={(eventObject) => setCountry(eventObject.target.value)}
//       >
//         {countries.map((country) => (
//           <option key={country} value={country}>
//             {country}
//           </option>
//         ))}
//       </select>

//       <label htmlFor="unit-select"></label>
//       <select
//         id="unit-select"
//         value={unit}
//         onChange={(eventObject) => setUnit(eventObject.target.value)}
//       >
//         <option value="F">Fahrenheit (°F)</option>
//         <option value="C">Celsius (°C)</option>
//       </select>

//       <br />

//       <p>
//         {country} Temperature Now:{" "}
//         {unit === "F"
//           ? tempF !== null
//             ? `${tempF}°F`
//             : "Loading..."
//           : tempC !== null
//           ? `${tempC}°C`
//           : "Loading..."}
//       </p>
//     </div>
//   );
// }

import axios from "axios";

const URL =
  "http://api.weatherapi.com/v1/current.json?key=6e3e7364a22b495ba1d45205250206";

const countries = [
  "Bhutan",
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Japan",
  "Germany",
  "Brazil",
  "South Africa",
];

function App() {
  const [country, setCountry] = useState("Bhutan");
  const [tempC, setTempC] = useState(null);
  const [tempF, setTempF] = useState(null);
  const [unit, setUnit] = useState("F");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}&q=${country}&aqi=no`);
        const data = response.data;
        setTempC(data.current.temp_c);
        setTempF(data.current.temp_f);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setTempC(null);
        setTempF(null);
      }
    };

    fetchData();
  }, [country]);

  return (
    <div className="App">
      <select
        id="country-select"
        value={country}
        onChange={(eventObject) => setCountry(eventObject.target.value)}
      >
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      <select
        id="unit-select"
        value={unit}
        onChange={(eventObject) => setUnit(eventObject.target.value)}
      >
        <option value="F">Fahrenheit (°F)</option>
        <option value="C">Celsius (°C)</option>
      </select>

      <p>
        {country} Temperature Now:{" "}
        {unit === "F"
          ? tempF !== null
            ? `${tempF}°F`
            : "Loading..."
          : tempC !== null
          ? `${tempC}°C`
          : "Loading..."}
      </p>
    </div>
  );
}


export default App;
