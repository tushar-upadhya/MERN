import "./App.css";
import { Navigation } from "./component";
import CustomerHomePage from "./pages/customer/CustomerHomePage";

function App() {
  return (
    <>
      <div>
        <Navigation />
      </div>

      <div>
        <CustomerHomePage />
      </div>
    </>
  );
}

export default App;
