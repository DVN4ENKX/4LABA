import Header from "./Components/Header.js";
import Info from "./Components/Info.js";
import Form from "./Components/Form.js";
import "./Components/color.css";
import './App.css';

function App() {
   return (
    <div className="App">
      <div class='color'>
        <Header />
        <Info />
        <Form />
      </div>
    </div>
  );
}

export default App;
