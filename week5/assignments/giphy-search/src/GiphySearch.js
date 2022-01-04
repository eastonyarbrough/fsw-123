export default function GiphySearch(props) {
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
    
        props.getGif(userSearch);
      }

      return(
        <div id="inputDiv">
            <label>Enter a word or phrase: </label>
            <input type="text" id="input" required></input>
            <button onClick={() => {newSearch()}}>Search</button>
        </div>
      )
}