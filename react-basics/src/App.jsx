import "./App.css";
const Card = () => {
  return (
    <div class="shadow p-2 rounded-sm">
      <p>
        <span class="star">★★★★★</span>
      </p>
      <p>
        Nepalabs has streamlined our mobile and website development workflows,
        saving us countless hours of manual effort.
      </p>
      <p class="bold">Deepak K. Jain</p>
      <p>Product Manager, TravelKosh</p>
    </div>
  );
};

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

export default App
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
