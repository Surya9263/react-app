import logo from "./logo.svg";
import "./App.css";

function App() {
  function launchOneDrivePicker() {
    var odOptions = {
      clientId: "INSERT-APP-ID-HERE",
      action: "query",
      multiSelect: true,
      advanced: {},
      success: function (files) {
        /* success handler */
      },
      cancel: function () {
        /* cancel handler */
      },
      error: function (error) {
        /* error handler */
      },
    };
    launchOneDrivePicker.open(odOptions);
  }
  return <div className="App"></div>;
}

export default App;
