import logo from "./logo.svg";
import "./App.css";

function App() {
  function launchOneDrivePicker() {
    var odOptions = {
      clientId: "9c0d6026-4d2d-496a-b58a-c0de8ab3425a",
      action: "query",
      multiSelect: true,
      advanced: {},
      success: function (files) {
        /* success handler */
        console.log("SUCCESS: ", files);
      },
      cancel: function () {
        /* cancel handler */
        console.log("CANCELLED");
      },
      error: function (error) {
        /* error handler */
        console.log("ERROR: ", error);
      },
    };
    OneDrive.open(odOptions);
  }
  return (
    <div className="App">
      <button onClick={() => launchOneDrivePicker()}>
        Click here
      </button>
    </div>
  );
}

export default App;
