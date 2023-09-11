import './card.css';

import clound from '../../assets/cloud.svg';
import glyph from '../../assets/glyph.svg';

function CardWeather() {
    return (
        <div className="card">
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
    )
}

export default CardWeather;