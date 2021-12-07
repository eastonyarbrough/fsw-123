export default function Die(props) {
    return (
        <div id="flexBox">
            <div id="diceBox">
                <div class="die">
                    <h1>{props.die1}</h1>
                </div>
                <div class="die">
                    <h1>{props.die2}</h1>
                </div>
            </div>
            <div id="btnBox">
                <button onClick = {props.rollDice} >Roll!</button>
            </div>
        </div>
    );
}