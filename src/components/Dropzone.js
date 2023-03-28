import React from "react";
import { useDropzone } from "react-dropzone";


function Dropzone({ open }) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({});

    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

  return (
    <div className="container">
    <div {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
        <p>
          Drag’n’drop some files here, or click to select files
        </p>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>

  );
}

export default Dropzone;