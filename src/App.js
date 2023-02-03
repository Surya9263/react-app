import logo from "./logo.svg";
import "./App.css";
import FilePicker from "./components/FilePicker";
import FileUploader from "./components/FileUploader";

function App() {
  return (
    <div className="App">
      <FilePicker />
      <FileUploader />
    </div>
  );
}

export default App;
