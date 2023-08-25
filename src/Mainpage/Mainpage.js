import { useState, useEffect, useRef } from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'
import { uploadFile } from '../service/api';
import Pic from '../images/login-bg.png'
import Sharingpic from '../images/sharingfilepic.png'

function MainPage() {
    const navigate = useNavigate();

    const [file, setFile] = useState('');
    const [result, setResult] = useState('');
 
    const fileInputRef = useRef();
 
    const url ='https://www.shutterstock.com/image-vector/transfer-documentation-folders-paper-files-1075189718'
 
    useEffect(() => {
    const getImage = async () => {
      if (file) {
         const data = new FormData();
          data.append("name", file.name);
          data.append("file", file);
 
       const response = await uploadFile(data);
        setResult(response.path);
      }
     }
      getImage();
    }, [file])
 
   const onUploadClick = () => {
     fileInputRef.current.click();
    }
    
  const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      navigate("/login");
    };

   return (
     <>
     <div>
       <button onClick={handleLogout} className="btn btn-primary"> Logout</button>
    </div>
      <div className='container'>
      {/* <img src={Pic} className='img' />*/}
       <div className='wrapper'>
         <h1>Make easy file sharing</h1>
         <p>Upload and share the downloaded link.</p>
 
         <button onClick={() => onUploadClick()}>Upload</button>
         <input
           type="file"
           ref={fileInputRef}
           style={{ display: "none" }}
           onChange={(e) => setFile(e.target.files[0])} />
 
         <a href={result} target='_blank'>{result}</a>
       </div>
       <img src={Sharingpic} className='img' />
   
     </div> 
     
     </>)
}
export default MainPage; 