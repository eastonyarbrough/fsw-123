import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { useEffect, useState, createContext } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import Search from './Search.js'
import NewEntry from './NewEntry.js'
import ListAllAmmo from './pages/ListAllAmmo.js';
import TwelveGauge from './pages/TwelveGauge.js';
import TwentyGauge from './pages/TwentyGauge.js';
import TwentyThreeGauge from './pages/TwentyThreeGauge.js';
import NineByEighteen from './pages/NineByEighteen.js';
import SevenSixTwoByTwentyFive from './pages/SevenSixTwoByTwentyFive.js';
import NineByNineteen from './pages/NineByNineteen.js';
import FortyFive from './pages/FortyFive.js';
import NineByTwentyOne from './pages/NineByTwentyOne.js';
import FiveSevenByTwentyEight from './pages/FiveSevenByTwentyEight.js';
import FourSixByThirty from './pages/FourSixByThirty.js';
import NineByThirtyNine from './pages/NineByThirtyNine.js';
import ThreeSixSix from './pages/ThreeSixSix.js';
import FiveFourFiveByThirtyNine from './pages/FiveFourFiveByThirtyNine.js';
import FiveFiveSixByFortyFive from './pages/FiveFiveSixByFortyFive.js';
import ThreeHundredBlackout from './pages/ThreeHundredBlackout.js';
import SevenSixTwoByThirtyNine from './pages/SevenSixTwoByThirtyNine.js';
import SevenSixTwoByFiftyOne from './pages/SevenSixTwoByFiftyOne.js';
import SevenSixTwoByFiftyFour from './pages/SevenSixTwoByFiftyFour.js';
import ThreeThreeEight from './pages/ThreeThreeEight.js';
import TwelveSevenByFiftyFive from './pages/TwelveSevenByFiftyFive.js';
import FortyByFortySix from './pages/FortyByFortySix';

export const DataContext = createContext();
export const FilterContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch('/ammo')
      .then(res => res.json())
      .then(res => {
        setData(res);
        setFilter("All Ammo");
      })
      .catch(err => console.log(err))
  }, []);

  const openLinks = () => {
    const menuIcon = document.querySelector('#hmIcon');
    const menu = document.querySelector('#links');
    menuIcon.style = "display: none";
    menu.style = "display: flex";
  }

  const closeLinks = () => {
    const menuIcon = document.querySelector('#hmIcon');
    const menu = document.querySelector('#links');
    menuIcon.style = "display: inline";
    menu.style = "display: none";
  }

  const rerender = () => {
    fetch('/ammo')
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => (console.log(err)))
  }

  const search = (query) => {
    fetch(`/ammo/search/name?name=${query}`)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err))
  }

  const postNew = async () => {
    await fetch('/ammo', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: document.querySelector("#newName").value,
        gauge: document.querySelector("#newGauge").value,
        type: document.querySelector("#newType").value,
        damage: document.querySelector("#newDmg").value,
        penPower: document.querySelector("#newPenPower").value,
        armorDmg: document.querySelector("#newArmDmg").value,
        accuracy: document.querySelector("#newAccBonus").value,
        recoil: document.querySelector("#newRecBonus").value,
        fragChance: document.querySelector("#newFragChance").value,
        lightBleed: document.querySelector("#newLBleed").value,
        heavyBleed: document.querySelector("#newHBleed").value,
        effectiveness: {
          lvl1: document.querySelector("#newAC1").value,
          lvl2: document.querySelector("#newAC2").value,
          lvl3: document.querySelector("#newAC3").value,
          lvl4: document.querySelector("#newAC4").value,
          lvl5: document.querySelector("#newAC5").value,
          lvl6: document.querySelector("#newAC6").value,
        },
        img: document.querySelector("#newImg").value,
        _id: uuid()
      })
    })
  }
  
  return (
    <BrowserRouter>
      <div id="hm">
        <div id="hmIcon">
          <img src={require('./images/hm.png')} alt="menuIcon" onClick={() => openLinks()}></img>
        </div>
        <nav id="links" style={{display: 'none'}}>
          <img id="hmX" src={require('./images/hmX.png')} alt="menuClose" onClick={() => closeLinks()}></img>
          <div id="routeLinks">
            <Link className="route" to="/">All Ammo</Link>
            <Link className="route" to="/12ga">12 Gauge</Link>
            <Link className="route" to="/20ga">20 Gauge</Link>
            <Link className="route" to="/23ga">23 Gauge</Link>
            <Link className="route" to="/9x18mm">9x18mm</Link>
            <Link className="route" to="/7.62x25mm">7.62x25mm</Link>
            <Link className="route" to="/9x19mm">9x19mm</Link>
            <Link className="route" to="/.45acp">.45 ACP</Link>
            <Link className="route" to="/9x21mm">9x21mm</Link>
            <Link className="route" to="/5.7x28mm">5.7x28mm</Link>
            <Link className="route" to="/4.6x30mm">4.6x30mm</Link>
            <Link className="route" to="/9x39mm">9x39mm</Link>
            <Link className="route" to="/.366tkm">.366 TKM</Link>
            <Link className="route" to="/5.45x39mm">5.45x39mm</Link>
            <Link className="route" to="/5.56x45mm">5.56x45mm</Link>
            <Link className="route" to="/.300blackout">.300 Blackout</Link>
            <Link className="route" to="/7.62x39mm">7.62x39mm</Link>
            <Link className="route" to="/7.62x51mm">7.62x51mm</Link>
            <Link className="route" to="/7.62x54mm">7.62x54mm</Link>
            <Link className="route" to="/.338lapua">.338 Lapua Magnum</Link>
            <Link className="route" to="/12.7x55mm">12.7x55mm</Link>
            <Link className="route" to="/40x46mm">40x46mm</Link>
          </div>
          <NewEntry postNew = {postNew}/>
        </nav>
      </div>
      <header>
        <img src={require('./images/hdrLogo.png')} alt="eftLogo" id="hdrImg"></img>
      </header>
      <Search search = {search} rerender = {rerender} filter={filter}/>
      <main>
      <DataContext.Provider value={data}>
          <FilterContext.Provider value ={setFilter}>
            <Routes>
              <Route exact path="/" element={<ListAllAmmo/>}></Route>
              <Route exact path="/12ga" element={<TwelveGauge/>}></Route>
              <Route exact path="/20ga" element={<TwentyGauge/>}></Route>
              <Route exact path="/23ga" element={<TwentyThreeGauge/>}></Route>
              <Route exact path="/9x18mm" element={<NineByEighteen/>}></Route>
              <Route exact path="/7.62x25mm" element={<SevenSixTwoByTwentyFive/>}></Route>
              <Route exact path="/9x19mm" element={<NineByNineteen/>}></Route>
              <Route exact path="/.45acp" element={<FortyFive/>}></Route>
              <Route exact path="/9x21mm" element={<NineByTwentyOne/>}></Route>
              <Route exact path="/5.7x28mm" element={<FiveSevenByTwentyEight/>}></Route>
              <Route exact path="/4.6x30mm" element={<FourSixByThirty/>}></Route>
              <Route exact path="/9x39mm" element={<NineByThirtyNine/>}></Route>
              <Route exact path="/.366tkm" element={<ThreeSixSix/>}></Route>
              <Route exact path="/5.45x39mm" element={<FiveFourFiveByThirtyNine/>}></Route>
              <Route exact path="/5.56x45mm" element={<FiveFiveSixByFortyFive/>}></Route>
              <Route exact path="/.300blackout" element={<ThreeHundredBlackout/>}></Route>
              <Route exact path="/7.62x39mm" element={<SevenSixTwoByThirtyNine/>}></Route>
              <Route exact path="/7.62x51mm" element={<SevenSixTwoByFiftyOne/>}></Route>
              <Route exact path="/7.62x54mm" element={<SevenSixTwoByFiftyFour/>}></Route>
              <Route exact path="/.338lapua" element={<ThreeThreeEight/>}></Route>
              <Route exact path="/12.7x55mm" element={<TwelveSevenByFiftyFive/>}></Route>
              <Route exact path="/40x46mm" element={<FortyByFortySix/>}></Route>
            </Routes>
          </FilterContext.Provider>
        </DataContext.Provider>
      </main>
    </BrowserRouter>
  )
}

export default App;