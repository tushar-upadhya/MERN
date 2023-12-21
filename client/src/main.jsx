import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

function Main() {
  return (
    <div>
      <App />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
