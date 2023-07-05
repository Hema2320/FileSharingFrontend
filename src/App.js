import { useState, useEffect, useRef } from 'react';
import './App.css';
import { uploadFile } from './service/api';
import Pic from '../src/images/sharingfile.jpg'
import Sharingpic from '../src/images/sharingfilepic.png'

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  // const url = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';
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

  return (
    <>
    <div className='container'>
      <img src={Pic} className='img' />
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
    
    </>
  );
}

export default App;