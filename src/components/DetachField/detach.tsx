import './detach.css';

import cloud from '../../assets/cloud.svg';

function DetachField() {
    return (
        <div className='fieldDetach'>
            <div className='leftDetails'>
                <div>
                    <img src={cloud} alt='Ícone' className='iconWeather' />
                    <h4>Chuva forte</h4>
                </div>
                <div>
                    <h1>19°</h1>
                    <h3>São Paulo, Brazil</h3>
                </div>
            </div>
            <div className='rightDetails'>
                <h2>7:30 pm</h2>
                <h3>Quarta-feira</h3>
            </div>
        </div>
    )
}

export default DetachField;