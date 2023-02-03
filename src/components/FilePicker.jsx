import React from 'react'

const FilePicker = () => {
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
    <div>
        <h2>File Picker</h2>
        <button onClick={() => launchOneDrivePicker()}>
        Click here
      </button>
    </div>
  )
}

export default FilePicker