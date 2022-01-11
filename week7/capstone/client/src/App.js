import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import {useEffect, useState} from 'react';
import './App.css';
import ListAllAmmo from './ListAllAmmo.js';
import TwelveGauge from './TwelveGauge.js';
import TwentyGauge from './TwentyGauge.js';
import TwentyThreeGauge from './TwentyThreeGauge.js';
import NineByEighteen from './NineByEighteen.js';
import SevenSixTwoByTwentyFive from './SevenSixTwoByTwentyFive.js';
import NineByNineteen from './NineByNineteen.js';
import FortyFive from './FortyFive.js';
import NineByTwentyOne from './NineByTwentyOne.js';
import FiveSevenByTwentyEight from './FiveSevenByTwentyEight.js';
import FourSixByThirty from './FourSixByThirty.js';
import NineByThirtyNine from './NineByThirtyNine.js';
import ThreeSixSix from './ThreeSixSix.js';
import FiveFourFiveByThirtyNine from './FiveFourFiveByThirtyNine.js';
import FiveFiveSixByFortyFive from './FiveFiveSixByFortyFive.js';
import ThreeHundredBlackout from './ThreeHundredBlackout.js';
import SevenSixTwoByThirtyNine from './SevenSixTwoByThirtyNine.js';
import SevenSixTwoByFiftyOne from './SevenSixTwoByFiftyOne.js';
import SevenSixTwoByFiftyFour from './SevenSixTwoByFiftyFour.js';
import ThreeThreeEight from './ThreeThreeEight.js';
import TwelveSevenByFiftyFive from './TwelveSevenByFiftyFive.js';
import FortyByFortySix from './FortyByFortySix';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/ammo')
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">All Ammo</Link>
        <Link to="/12ga">12 Gauge</Link>
        <Link to="/20ga">20 Gauge</Link>
        <Link to="/23ga">23 Gauge</Link>
        <Link to="/9x18mm">9x18mm</Link>
        <Link to="/7.62x25mm">7.62x25mm</Link>
        <Link to="/9x19mm">9x19mm</Link>
        <Link to="/.45acp">.45 ACP</Link>
        <Link to="/9x21mm">9x21mm</Link>
        <Link to="/5.7x28mm">5.7x28mm</Link>
        <Link to="/4.6x30mm">4.6x30mm</Link>
        <Link to="/9x39mm">9x39mm</Link>
        <Link to="/.366tkm">.366 TKM</Link>
        <Link to="/5.45x39mm">5.45x39mm</Link>
        <Link to="/5.56x45mm">5.56x45mm</Link>
        <Link to="/.300blackout">.300 Blackout</Link>
        <Link to="/7.62x39mm">7.62x39mm</Link>
        <Link to="/7.62x51mm">7.62x51mm</Link>
        <Link to="/7.62x54mm">7.62x54mm</Link>
        <Link to="/.338lapua">.338 Lapua Magnum</Link>
        <Link to="/12.7x55mm">12.7x55mm</Link>
        <Link to="/40x46mm">40x46mm</Link>
      </nav>
      <main>
        <Routes>
          <Route exact path="/" element={<ListAllAmmo ammo={data}/>}></Route>
          <Route exact path="/12ga" element={<TwelveGauge ammo={data}/>}></Route>
          <Route exact path="/20ga" element={<TwentyGauge ammo={data}/>}></Route>
          <Route exact path="/23ga" element={<TwentyThreeGauge ammo={data}/>}></Route>
          <Route exact path="/9x18mm" element={<NineByEighteen ammo={data}/>}></Route>
          <Route exact path="/7.62x25mm" element={<SevenSixTwoByTwentyFive ammo={data}/>}></Route>
          <Route exact path="/9x19mm" element={<NineByNineteen ammo={data}/>}></Route>
          <Route exact path="/.45acp" element={<FortyFive ammo={data}/>}></Route>
          <Route exact path="/9x21mm" element={<NineByTwentyOne ammo={data}/>}></Route>
          <Route exact path="/5.7x28mm" element={<FiveSevenByTwentyEight ammo={data}/>}></Route>
          <Route exact path="/4.6x30mm" element={<FourSixByThirty ammo={data}/>}></Route>
          <Route exact path="/9x39mm" element={<NineByThirtyNine ammo={data}/>}></Route>
          <Route exact path="/.366tkm" element={<ThreeSixSix ammo={data}/>}></Route>
          <Route exact path="/5.45x39mm" element={<FiveFourFiveByThirtyNine ammo={data}/>}></Route>
          <Route exact path="/5.56x45mm" element={<FiveFiveSixByFortyFive ammo={data}/>}></Route>
          <Route exact path="/.300blackout" element={<ThreeHundredBlackout ammo={data}/>}></Route>
          <Route exact path="/7.62x39mm" element={<SevenSixTwoByThirtyNine ammo={data}/>}></Route>
          <Route exact path="/7.62x51mm" element={<SevenSixTwoByFiftyOne ammo={data}/>}></Route>
          <Route exact path="/7.62x54mm" element={<SevenSixTwoByFiftyFour ammo={data}/>}></Route>
          <Route exact path="/.338lapua" element={<ThreeThreeEight ammo={data}/>}></Route>
          <Route exact path="/12.7x55mm" element={<TwelveSevenByFiftyFive ammo={data}/>}></Route>
          <Route exact path="/40x46mm" element={<FortyByFortySix ammo={data}/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;