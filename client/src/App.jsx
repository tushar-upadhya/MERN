import "./App.css";
import { Footer, Navigation } from "./component";
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

      <Footer />
    </>
  );
}

export default App;

//  1 47
