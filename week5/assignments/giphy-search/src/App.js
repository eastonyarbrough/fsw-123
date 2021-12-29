import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';

function App() {
  const [imgSrc, setSrc] = useState("");
  const [alt, setAlt] = useState("");

  useEffect(() => {
    const getGif = () => {
      fetch('https://api.giphy.com/v1/gifs/search?q=dog&api_key=uaS3ozXFlc14EsLuPOXZq1pfURUJelQO')
        .then(res => res.json())
        .then(res => {
          let dataNum = 0;
          res.data.forEach(() => dataNum++)
          const random = Math.floor(Math.random() * dataNum);
          setSrc(res.data[random].images.original.url);
          setAlt(res.data[random].title);
        })
        .catch(err => console.log(err))
    }

    getGif();
  }, []);

  const newSearch = () => {
    let userSearch = document.querySelector("#input").value;
    let loading = document.createElement("h3");

    document.querySelector("#curImg").src = "";
    document.querySelector("#curImg").alt = "";

    loading.textContent = "loading GIF...";
    loading.id = "loading";

    document.querySelector("#imgDiv").appendChild(loading);

    if (document.querySelector("#noImg")) {
      document.querySelector("#noImg").remove();
    }

    fetch(`https://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=uaS3ozXFlc14EsLuPOXZq1pfURUJelQO`)
        .then(res => res.json())
        .then(res => {
          let dataNum = 0;
          res.data.forEach(() => dataNum++);

          if (dataNum !== 0) {
            const random = Math.floor(Math.random() * dataNum);
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
          document.querySelector("#loading").remove();
        })
        .catch(err => console.log(err))
  }

  return (
    <>
      <div id="inputDiv">
        <label>Enter a word or phrase: </label>
        <input type="text" id="input" required></input>
        <button onClick={() => {newSearch()}}>Search</button>
      </div>
      <div id="imgDiv">
        <img src={imgSrc} alt={alt} id="curImg"></img>
      </div>
    </>
  );
}

export default App;