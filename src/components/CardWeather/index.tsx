import './card.css';

import clound from '../../assets/cloud.svg';
import glyph from '../../assets/glyph.svg';

import DelButton from '../../components/DelButton/button';

import { useState } from 'react';

function CardWeather() {

    const [delState, setDelState] = useState(false);


    return (
        <div className='cardContainer' onMouseEnter={() => setDelState(true)} onMouseLeave={() => setDelState(false)}>
            <div className="card" >
                <h1 className='cityCard'>São Paulo</h1>
                <span className='countryCard'>Brazil</span>
                <img src={clound} alt='Nuvem' />
                <h2 className='tempCard'>19°</h2>
                <div className='bottomCard'>
                    <img src={glyph} alt='Glifo' />
                    <h4>95%</h4>
                    <span>umidade</span>
                </div>

            </div>
            {delState && <DelButton />}
        </div>

    );
}

export default CardWeather;