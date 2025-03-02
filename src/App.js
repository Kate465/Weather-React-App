import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        This project was coded by Katego and is{" "}
        <a href="https://github.com/Kate465/Weather-React-App" rel="noopener">
          open sourced on github{" "}
        </a>
      </p>
    </div>
  );
}

export default App;
