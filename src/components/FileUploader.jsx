import React from 'react'

const FileUploader = () => {
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
    <div>
        <h2>File Uploader</h2>
        <input id="fileUploadControl" name="fileUploadControl" type="file" />
        <button onClick={()=>launchSaveToOneDrive()}>Save to OneDrive</button>
    </div>
  )
}

export default FileUploader