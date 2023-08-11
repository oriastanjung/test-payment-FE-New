import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { loadMidtransSnapScript } from "./midtrans";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");
  const [token, setToken] = useState("");
  const handleClick = async () => {
    try {
      setToken(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBayar = () => {
    window.snap.pay(token);
  };

  useEffect(() => {
    loadMidtransSnapScript("SB-Mid-client-3GGmxBhoa4SEkFZs");
  }, []);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <input value={data} onChange={(e) => setData(e.target.value)} />
      <div className="App" style={{ marginTop: "20%" }}>
        {token && <p>TOKEN : {token}</p>}
        <button onClick={handleClick}>Click</button>
        <button onClick={handleBayar}>bayar</button>
      </div>
    </>
  );
}

export default App;
