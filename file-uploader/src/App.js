import logo from "./logo.svg";
import "./App.css";

function App() {
  function launchSaveToOneDrive() {
    var odOptions = {
      clientId: "9c0d6026-4d2d-496a-b58a-c0de8ab3425a",
      action: "save",
      sourceInputElementId: "fileUploadControl",
      sourceUri: "",
      fileName: "file.txt",
      openInNewWindow: true,
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
    OneDrive.save(odOptions);
  }
  return (
    <div className="App">
      <input id="fileUploadControl" name="fileUploadControl" type="file" />
      <button onclick="launchSaveToOneDrive">Save to OneDrive</button>
    </div>
  );
}

export default App;
