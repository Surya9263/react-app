import React, { useState } from 'react'

const FilePicker = () => {

  const [fileName,setFileName]=useState()
  const [downloadLink,setDownloadLink]=useState()

    function launchOneDrivePicker() {
        var odOptions = {
          clientId: "042c64fe-f5f6-4694-8584-82a0a2c14f26",
          action: "query",
          multiSelect: true,
          advanced: {
            queryParameters: "select=id,name,size,file,folder,photo,@microsoft.graph.downloadUrl",
          },
          success: function (files) {
            /* success handler */
            setFileName(files.value[0].name);
            setDownloadLink(files.value[0]["@microsoft.graph.downloadUrl"])
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
        <button onClick={launchOneDrivePicker}>
        Click here
      </button>
      <div style={{diplay:"flex",border:"1px solid"}} >
        <p style={{fontWeight:"bold"}}>File name:</p>
        <p>{fileName}</p>
      </div>
      <div style={{diplay:"flex",border:"1px solid"}}>
          <p style={{fontWeight:"bold"}}>Download here: </p>
          <a href={downloadLink}>{downloadLink}</a>
        </div>
    </div>
  )
}

export default FilePicker