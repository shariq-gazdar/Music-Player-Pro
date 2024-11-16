import React from "react";
import Navbar from "./components/Navbar";
import Tracks from "./components/Tracks";

function App() {
  return (
    <div className="bg-neutral-900  h-svh text-white">
      <Navbar />
      <Tracks />
    </div>
  );
}

export default App;
