import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import Questions from './Components/Questions';
import Footer from './Components/Footer';


function App() {
  const getRequest = async () => {
    try {
      const { data } = await axios.get("/api/test");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <h1>Piknik is coming soon!!</h1>

      <Questions />

      <Footer />

    </div>
  );
}

export default App;
