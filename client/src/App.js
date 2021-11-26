import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import User from "./components/Auth/User";
import Home from "./components/Home/Home";
import Footer from "./components/Home/Footer";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="bg-gray-100">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/auth" element={<User />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
