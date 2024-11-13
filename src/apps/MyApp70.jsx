import React, { useState } from "react";
import axios from "axios";

function MyApp70(props) {
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState([]);

  const handleClick = () => {
    axios.postForm("/api/main8/sub3", {
      title: title,
      files: files,
    });
  };

  return (
    <div>
      <input
        placeholder={"제목"}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
      <br />
      <button onClick={handleClick}>전송</button>
    </div>
  );
}

export default MyApp70;
