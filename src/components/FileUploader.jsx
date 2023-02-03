import React, { useState } from 'react'

const FileUploader = () => {

    const [file,setFile]=useState()

    function launchSaveToOneDrive() {
        var odOptions = {
          clientId: "042c64fe-f5f6-4694-8584-82a0a2c14f26",
          action: "save",
          sourceInputElementId: "fileUploadControl",
          sourceUri: "",
          fileName: {file},
          openInNewWindow: true,
          advanced: {
            
          },
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

      function handleChange(e){
        setFile(e.target.value.split("\\")[2])
      }

  return (
    <div>
        <h2>File Uploader</h2>
        <input onInput={handleChange} id="fileUploadControl" name="fileUploadControl" type="file" />
        <button onClick={launchSaveToOneDrive}>Save to OneDrive</button>
    </div>
  )
}

export default FileUploader