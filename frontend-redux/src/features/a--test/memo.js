import React, { useState } from 'react';
import axios from 'axios';
 
const App = () => {
  // 담을 state
  const [selectedFile, setSelectedFile] = useState(null);
 
  // onChange역할
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
 
  // formData라는 instance에 담아 보냄
  const handleFileUpload = () => {
    const formData = new FormData();
 
    formData.append("userfile", selectedFile, selectedFile.name);
 
    axios.post("api/uploadfile", formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
 
  return (
    <div>
      <input type="file" accept="image/*"  onChange={handleFileChange} />
      <button onClick={handleFileUpload}>업로드</button>
    </div>
  );
};
 
export default App;