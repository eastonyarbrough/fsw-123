import {useState, useEffect} from 'react';

export default function GiphySearch(props) {
  const [imgSrc, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  let userSearch = props.initQuery;

  useEffect(() => {
    getGif(userSearch);
  }, [userSearch]);

  const newSearch = () => {
    let userSearch = document.querySelector("#input").value;
    
    let loading = document.createElement("h3");
    loading.textContent = "loading GIF...";
    loading.id = "loading";
    document.querySelector("#imgDiv").appendChild(loading);
    
    document.querySelector("#curImg").src = "";
    document.querySelector("#curImg").alt = "";
    
    if (document.querySelector("#noImg")) {
      document.querySelector("#noImg").remove();
    }
    
    getGif(userSearch);
  }

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

  return(
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
  )
}