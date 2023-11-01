import './card.css';

import clound from '../../assets/cloud.svg';
import glyph from '../../assets/glyph.svg';

import DelButton from '../../components/DelButton/button';
import CityProp from '../../types/cityProp';

import apiWeather from '../../services/apiWeather';

import { useEffect, useState } from 'react';

function CardWeather({ cityName }: CityProp) {

    const [delState, setDelState] = useState<boolean>(false);

    const [temp, setTemp] = useState<number>(0);
    const [humidity, setHumidity] = useState<number>(0);

    async function showInfo(): Promise<void> {
        const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=pt_br`;

        try {
            const response = await apiWeather.get(`${urlApi}`);

            const { data } = response;

            setTemp(parseInt(data.main.temp));
            setHumidity(data.main.humidity);

        } catch (error) {
            console.log('Deu erro');

        }
    }

    useEffect(() => {
        showInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='cardContainer' onMouseEnter={() => setDelState(true)} onMouseLeave={() => setDelState(false)}>
            <div className="card" >
                <h1 className='cityCard'>{cityName}</h1>
                <span className='countryCard'>Brazil</span>
                <img src={clound} alt='Nuvem' />
                <h2 className='tempCard'><span>{temp}</span>&deg;</h2>
                <div className='bottomCard'>
                    <img src={glyph} alt='Glifo' />
                    <h4>{humidity}%</h4>
                    <span>umidade</span>
                </div>

            </div>
            {delState && <DelButton />}
        </div>

    );
}

export default CardWeather;