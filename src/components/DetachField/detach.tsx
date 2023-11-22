import './detach.css';

import CityProp from '../../types/cityProp';

import apiWeather from '../../services/apiWeather';

import { useEffect, useState } from 'react';
import { Country } from 'country-state-city';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

function DetachField({ cityName }: CityProp) {

    const [showDetach, setShowDetach] = useState<boolean>(false);

    const [icon, setIcon] = useState<string>('01d');
    const [description, setDescription] = useState<string>('');
    const [temp, setTemp] = useState<number>(0);
    const [countryName, setCountryName] = useState<string>('');

    const [hour, setHour] = useState<number>(0);
    const [timeCity, setTimeCity] = useState<string>('');
    const [weekDay, setWeekDay] = useState<string>('');

    const [hourData, setHourData] = useState<boolean>(false);

    const urlIcon: string = 'https://openweathermap.org/img/wn/' + icon + '.png';

    function setMoment(timezone: number) {

        const year: number = new Date().getFullYear();
        const month: number = new Date().getMonth();
        const day: number = new Date().getUTCDate();
        const currentHour: number = new Date().getUTCHours();
        const minutes: number = new Date().getMinutes();
        const localHour: number = currentHour + timezone;
        setHour(localHour);
        setHourData(true);

        const fullDate: Date = new Date(year, month, day, localHour, minutes);

        setTimeCity(format(fullDate, 'h:mm a'));
        setWeekDay(format(fullDate, 'EEEE', { locale: ptBR }));
    }

    async function getInfo() {

        if (cityName === null) {
            return
        }

        const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=pt_br`;

        const response = await apiWeather.get(`${urlApi}`);

        const { data } = response;

        const timezone = data.timezone / 3600;

        setMoment(timezone);

        const country = Country.getCountryByCode(data.sys.country);

        setIcon(data.weather[0].icon);
        setDescription(data.weather[0].description);
        setCountryName(country!.name);
        setTemp(parseInt(data.main.temp));

        setShowDetach(true);
    }

    function timing() {

        if (!hourData) {
            return;
        }

        const year: number = new Date().getFullYear();
        const month: number = new Date().getMonth();
        const day: number = new Date().getUTCDate();
        const minutes: number = new Date().getMinutes();

        const fullDate: Date = new Date(year, month, day, hour, minutes);

        setTimeCity(format(fullDate, 'h:mm a'));
    }

    setInterval(timing, 1000);

    useEffect(() => {
        getInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                        <h2>{timeCity}</h2>
                        <h3>{weekDay}</h3>
                    </div>
                </>
            }

        </div>
    )
}

export default DetachField;