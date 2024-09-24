import "./App.css";
import Resorts from "./Components/Resorts";

function App() {
  0;

  return (
    <>
      <h1>Resorts Lite</h1>
      <div className="container">
        <Resorts
          name="Indonesia"
          hotel="Gili Air Hotel"
          image="\public\1.jpg"
          rate="4.8 ★"
          price="$589/night"
        />
        <Resorts
          name="Seychelles"
          hotel="Hilton Resort"
          image="\public\2.jpg"
          rate="4.2 ★"
          price="$629/night"
        />
        <Resorts
          name="US Virgin Islands"
          hotel="Goa Resort"
          image="\public\3.jpg"
          rate="3.5 ★"
          price="$485/night"
        />
        <Resorts
          name="Bahamas"
          hotel="Kuredu Resort"
          image="\public\4.jpg"
          rate="4.1 ★"
          price="$729/night"
        />
        <Resorts
          name="Mauritius"
          hotel="Trou D'eau Douce"
          image="\public\5.jpg"
          rate="4.9 ★"
          price="$877/night"
        />
        <Resorts
          name="Bermuda"
          hotel="Staniel Cay Hotel"
          image="\public\6.jpg"
          rate="3.2 ★"
          price="$365/night"
        />
      </div>
    </>
  );
}

export default App;
