import { useState } from 'react';

export default function Search(props) {
    const [searchCriteria, setSearchCriteria] = useState("")

    const clearInput = () => {
        document.querySelector("#searchInput").value = ""
    }

    return(
        <>
        <div id="search">
            <input type="text" id="searchInput" placeholder="Please enter name of ammo"></input>
            <button className="searchBtn" onClick={() => {
                props.search(document.querySelector("#searchInput").value)
                setSearchCriteria(document.querySelector("#searchInput").value)
                clearInput();    
            }}>Search</button>
            <button className="searchBtn" onClick={() => {
                props.rerender()
                setSearchCriteria("")
            }}>Reset</button>
        </div>
        <div id="searchCriteria">
            <h2 id="currentFilter">{`Currently Viewing: "${props.filter} ${searchCriteria}"`}</h2>
        </div>
      </>
    );
}