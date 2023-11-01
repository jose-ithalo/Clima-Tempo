import './card.css';

import clound from '../../assets/cloud.svg';
import glyph from '../../assets/glyph.svg';

import DelButton from '../../components/DelButton/button';

import CityProp from '../../types/cityProp';

import apiWeather from '../../services/apiWeather';

import fileContext from '../../context/fileContext';

import { useContext, useEffect, useState } from 'react';
import { Country } from 'country-state-city';

function CardWeather({ cityName }: CityProp) {

    const { setErrorState } = useContext<any>(fileContext);

    const [delState, setDelState] = useState<boolean>(false);

    const [countryName, setCountryName] = useState<string>('');
    const [temp, setTemp] = useState<number>(0);
    const [humidity, setHumidity] = useState<number>(0);

    async function showInfo(): Promise<void> {
        const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=pt_br`;

        try {
            const response = await apiWeather.get(`${urlApi}`);

            const { data } = response;

            const country = Country.getCountryByCode(data.sys.country);

            setCountryName(country!.name);

            setTemp(parseInt(data.main.temp));
            setHumidity(data.main.humidity);

        } catch (error) {
            setErrorState(true);
            setTimeout((): void => {
                setErrorState(false);
            }, 5000);

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
                <span className='countryCard'>{countryName}</span>
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