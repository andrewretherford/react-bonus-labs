import './App.css';
import './Images.css';
import { useState } from 'react';
import SmallImage from './components/SmallImage';
import LargeImage from './components/LargeImage';
import Form from './components/Form';

function App() {
  const [images, setImages] = useState(["https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", "https://images.unsplash.com/photo-1524820197278-540916411e20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", "https://images.unsplash.com/photo-1547448526-5e9d57fa28f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", "https://images.unsplash.com/photo-1592409065737-a253f2900fa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60","https://images.unsplash.com/photo-1505884065216-0661d68e5c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"])

  const [currentImage, setCurrentImage] = useState(images[0])

  function handleSubmit(e, input) {
    e.preventDefault()

    setImages((prev) => [...prev, input])
  }

  return (
    <div className="App" id="wrapper">
      <LargeImage url={currentImage}/>
      {images.map((url, index) => {
        return <SmallImage 
          src={url}
          setCurrentImage={setCurrentImage}
          key={index} />
      })}
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
