import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [image, setImage] = useState(null);
  const [uploadedData, setUploadedData] = useState("");
  console.log(uploadedData);
  console.log(image);

  const formData = new FormData();

  const handleSendFile = async () => {
    formData.append("image", image);
    console.log("form data->", formData);
    try {
      let res = await axios.post("http://localhost:3000/getImg", formData);
      if (res) {
        setUploadedData(res.data);
      }
    } catch (error) {
      console.log("error in upload api", error);
    }
  };

  console.log(`http://localhost:3000/${uploadedData}`);

  return (
    <div>
      <h1>File upload </h1>

      <input
        type="file"
        name="image"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={handleSendFile}>Send file</button>

      <img width={200} src={`http://localhost:3000/${uploadedData}`} alt="" />
    </div>
  );
};

export default App;
