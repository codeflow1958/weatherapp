import { useState } from "react";
import "./App.css";
 

function App() {
  const [count, setCount] = useState(0);



  return (
    <>
      <div>
       
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
