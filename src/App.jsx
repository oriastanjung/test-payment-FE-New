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
    if (token) {
      const snap = window.snap;
      
      snap.pay(token, {
        onSuccess: (result) => {
          console.log(result)
          // Handle payment success, update UI, etc.
        },
        onPending: (result) => {
          alert("Payment pending:", result);
          // Handle pending payment
        },
        onError: (result) => {
          alert("Payment error:", result);
          // Handle payment error
        },
        onClose: () => {
          alert("Payment popup closed");
          // Handle popup closed
        }
      });
    }
  };

  useEffect(() => {
    loadMidtransSnapScript("SB-Mid-client-VegDwZVhGmg9xQXM");
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
