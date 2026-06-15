import "./App.css";
import Events from "./components/Events";
import FirstComponent from "./components/FirstComponent";
import TemplateExpression from "./components/TemplateExpression";

function App() {
  return <div className="App">
    <h1>Fundamentos do React</h1>
    <FirstComponent />
    <TemplateExpression />
    <Events />
  </div>;
}

export default App;