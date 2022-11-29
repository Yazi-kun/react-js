import './App.css'
import Navbar from "./Component/Navbar/Navbar";
import Gif from "./Component/Gif/Gif";
import Theband from "./Component/Theband/Theband";
import Tour from "./Component/Tour/Tour";
import Contact from "./Component/Contact/Contact";
import Map from "./Component/Map/Map";

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Gif/>
      <Theband/>
      <Tour/>
      <Contact/>
      <Map/>
      
      
    </div>
  );
}

export default App;
