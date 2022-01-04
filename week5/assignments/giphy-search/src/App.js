import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';
import GiphySearch from './GiphySearch.js'

function App() {
  const [imgSrc, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  let userSearch = "dog";

  useEffect(() => {
    getGif(userSearch);
  }, [userSearch]);

  const getGif = (search) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(search)}&api_key=uaS3ozXFlc14EsLuPOXZq1pfURUJelQO`)
      .then(res => res.json())
      .then(res => {
        let dataNum = 0;
        res.data.forEach(() => dataNum++);

        if (dataNum !== 0) {
          const random = Math.floor((Math.random() * dataNum) + 1);
          setSrc(res.data[random].images.original.url);
          setAlt(res.data[random].title);
        }
        else if (dataNum === 0) {
          let noImg = document.createElement("h3");
          noImg.textContent = "Sorry, there are no GIFs for that.";
          noImg.id = "noImg";
          document.querySelector("#imgDiv").appendChild(noImg);
        }
      })
      .then(() => {
        if (document.querySelector("#loading")) {
          document.querySelector("#loading").remove();
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <GiphySearch getGif = {getGif}/>
      <div id="imgDiv">
        <img src={imgSrc} alt={alt} id="curImg"></img>
      </div>
    </>
  );
}

export default App;