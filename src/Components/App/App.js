import './App.css';
import {useState, useEffect} from "react";
import Image from "../Image/Image"
import Modal from '../Modal/Modal';
function App() {
  let ApiKey = "896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043";
  const [images, setImages] = useState([]);
  const [currImage, setcurrImage] = useState("");
  const [active, setActive] = useState(false)
  useEffect(() => {
    async function getImages(){
      const response = await fetch("https://api.unsplash.com/photos/?client_id=" + ApiKey)
      const images = await response.json();
      setImages(images);
    }
    
    getImages();
  }, []);
  const updateData = (value, image) => {
    setActive(value);
    setcurrImage(image);
  } 
  return (
    <>
      <div className='main'>
        <div className='wrapper'>
          <div className='container'>
            <div className='logo'>Gallery for You</div>
          </div>
          <div className='images'>        
            {images.map((value, index) => (
              <Image updateData={updateData} key={value.id} {...value}></Image>
            ))}
          </div>
        </div>
      </div>
      <Modal active={active} setActive={setActive}>
        <img src={currImage}></img>
      </Modal>
    </>
    
  );
}

export default App;
