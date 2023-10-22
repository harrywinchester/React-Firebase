import logo from "./logo.svg";
import "./App.css";
import Image from "./assets/image.jpg";

function App() {
  let name = "Ye Lin Soe";
  return (
    <div className="app">
      <h1>Hello {name}</h1>
      {/* 1st way */}
      {/* absolute path */}
      {/* <img src="http://localhost:3000/image.jpg" alt="" /> */}
      {/* relative path */}
      {/* <img src="/image.jpg" alt="" /> */}
      {/* 2nd way  */}
      {/* <img src={Image} alt="" /> */}
    </div>
  );
}

export default App;
