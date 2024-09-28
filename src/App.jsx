// Styles
import './App.css'

// Authentication and Authorization -
// https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/

import { Route, Routes } from "react-router-dom";
import { Login, Signup, Home } from "./Pages/index";

function App() {
  return (
    <div className="App">
      <Routes>``

        {/* Employee */}
        <Route path="/a/login" element={<Login/>} />
        <Route path="/a/signup" element={<Signup />} />
        <Route path="/a/" element={<Home />}/>

      </Routes>
    </div>
  );
}

export default App;
