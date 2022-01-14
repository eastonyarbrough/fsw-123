import { useContext } from 'react';
import { DataContext } from '../App';

export default function SevenSixTwoByFiftyFour() {
    const data = useContext(DataContext);
    const filtered = data.filter(e => e.gauge === "7.62x54mm");

    const checkEmpty = (subject, string) => {
        if (string !== "") {
            return(
                <li><h3>{`${subject}: ${string}`}</h3></li>
            )
        }
    }

    return(
        filtered.map(e => {
            return(
                <div className='entryDiv'>
                    <h2 className='title'>{`${e.gauge} ${e.name}`}</h2>
                    <ul style={{listStyle: 'none'}} className='stats'>
                        <li><h3>{`Type: ${e.type}`}</h3></li>
                        <li><h3>{`Damage: ${e.damage}`}</h3></li>
                        <li><h3>{`Penetration: ${e.penPower}`}</h3></li>
                        <li><h3>{`Armor Damage: ${e.armorDmg}`}</h3></li>
                        <>{checkEmpty('Accuracy Bonus', e.accuracy)}</>
                        <>{checkEmpty('Recoil Bonus', e.recoil)}</>
                        <li><h3>{`Fragmentation Chance: ${e.fragChance}`}</h3></li>
                        <>{checkEmpty('Light Bleed Bonus', e.lightBleed)}</>
                        <>{checkEmpty('Heavy Bleed Bonus', e.heavyBleed)}</>
                    </ul>
                    <div className='effectiveness'>
                        <h3>Armor Class Effectiveness</h3>
                        <ul style={{listStyle: 'none'}}>
                            <li><h3>{`1: ${e.effectiveness.lvl1}`}</h3></li>
                            <li><h3>{`2: ${e.effectiveness.lvl2}`}</h3></li>
                            <li><h3>{`3: ${e.effectiveness.lvl3}`}</h3></li>
                            <li><h3>{`4: ${e.effectiveness.lvl4}`}</h3></li>
                            <li><h3>{`5: ${e.effectiveness.lvl5}`}</h3></li>
                            <li><h3>{`6: ${e.effectiveness.lvl6}`}</h3></li>
                        </ul>
                    </div>
                    <div className="image">
                        <img src={e.img} alt={e.name}></img>
                    </div>
                </div>
            )
        })
    )
}