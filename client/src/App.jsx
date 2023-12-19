import "./App.css";
import { HomePage, Navigation } from "./customer/component";

function App() {
  return (
    <>
      <div>
        <Navigation />
      </div>

      <div>
        <HomePage />
      </div>
    </>
  );
}

export default App;
