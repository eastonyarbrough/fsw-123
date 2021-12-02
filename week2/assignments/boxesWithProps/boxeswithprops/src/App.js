import Card from "./Card.js"
import './Card.css'

const cardNum = 4;
const colors = ['red', 'orange', 'yellow', 'green'];

function App() {
  return ([...Array(cardNum)].map((e, i) => <Card
    key={i}
    title = {"Title " + (i + 1)}
    subtitle = {"Sub Title " + (i + 1)}
    desc = {"Hello World " + (i + 1) + "!"}
    myStyle = {{backgroundColor: colors[i], width: '250px'}}
    />)
  );
}

export default App;
