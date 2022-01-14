export default function NewEntry(props) {
    const clearInputs = () => {
        const getInputs = [...document.querySelectorAll(".newInput")];
        
        getInputs.forEach(e => e.value = "")
    }

    return(
        <div id="newInputs">
            <h3>Add New Ammo</h3>
            <input type="text" className="newInput" id="newName" placeholder="Enter new name"></input>
            <input type="text" className="newInput" id="newGauge" placeholder="Enter new gauge"></input>
            <input type="text" className="newInput" id="newType" placeholder="Enter new type"></input>
            <input type="text" className="newInput" id="newDmg" placeholder="Enter new damage"></input>
            <input type="text" className="newInput" id="newPenPower" placeholder="Enter new penetration"></input>
            <input type="text" className="newInput" id="newArmDmg" placeholder="Enter new armor damage"></input>
            <input type="text" className="newInput" id="newAccBonus" placeholder="Enter new accuracy bonus"></input>
            <input type="text" className="newInput" id="newRecBonus" placeholder="Enter new recoil bonus"></input>
            <input type="text" className="newInput" id="newFragChance" placeholder="Enter new frag chance"></input>
            <input type="text" className="newInput" id="newLBleed" placeholder="Enter new light bleed chance"></input>
            <input type="text" className="newInput" id="newHBleed" placeholder="Enter new heavy bleed chance"></input>
            <input type="text" className="newInput" id="newAC1" placeholder="Enter new lvl. 1 effectiveness"></input>
            <input type="text" className="newInput" id="newAC2" placeholder="Enter new lvl. 2 effectiveness"></input>
            <input type="text" className="newInput" id="newAC3" placeholder="Enter new lvl. 3 effectiveness"></input>
            <input type="text" className="newInput" id="newAC4" placeholder="Enter new lvl. 4 effectiveness"></input>
            <input type="text" className="newInput" id="newAC5" placeholder="Enter new lvl. 5 effectiveness"></input>
            <input type="text" className="newInput" id="newAC6" placeholder="Enter new lvl. 6 effectiveness"></input>
            <input type="text" className="newInput" id="newImg" placeholder="Enter new image URL"></input>
            <button className="searchBtn" onClick={() => {
                props.postNew();
                clearInputs();
            }}>Submit</button>
        </div>
    );
}