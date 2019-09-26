import React from "react";
import "./App.css";
import PicList from "./compontents/PicList";
import Header from "./compontents/Header";
import Footer from "./compontents/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <PicList />
      <Footer />
    </div>
  );
}

export default App;
