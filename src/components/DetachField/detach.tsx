import './detach.css';

import CityProp from '../../types/cityProp';

import apiWeather from '../../services/apiWeather';

import { useEffect, useState } from 'react';
import { Country } from 'country-state-city';

function DetachField({ cityName }: CityProp) {

    const [showDetach, setShowDetach] = useState<boolean>(false);

    const [icon, setIcon] = useState<string>('01d');
    const [description, setDescription] = useState<string>('');
    const [temp, setTemp] = useState<number>(0);
    const [countryName, setCountryName] = useState<string>('');

    const urlIcon: string = 'https://openweathermap.org/img/wn/' + icon + '.png';

    async function getInfo() {

        if (cityName === null) {
            return
        }

        const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=pt_br`;

        const response = await apiWeather.get(`${urlApi}`);

        const { data } = response;

        const country = Country.getCountryByCode(data.sys.country);

        setIcon(data.weather[0].icon);
        setDescription(data.weather[0].description);
        setCountryName(country!.name);
        setTemp(parseInt(data.main.temp));

        setShowDetach(true);
    }

    useEffect(() => {
        getInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='fieldDetach'>
            {showDetach &&
                <>
                    <div className='leftDetails'>
                        <div>
                            <img src={urlIcon} alt='Ícone' className='iconWeather' />
                            <h4>{description}</h4>
                        </div>
                        <div>
                            <h1>{temp}&deg;</h1>
                            <h3>{cityName}, {countryName}</h3>
                        </div>
                    </div>
                    <div className='rightDetails'>
                        <h2>7:30 pm</h2>
                        <h3>Quarta-feira</h3>
                    </div>
                </>
            }

        </div>
    )
}

export default DetachField;