import './modal.css';

import api from '../../services/apiClima';

import { ChangeEvent, FormEvent, useState, useContext } from 'react';
import fileContext from '../../context/fileContext';

import Weather from '../../types/weather';

function ModalSearch() {

    const { setModalState, weatherData, setWeatherData } = useContext<any>(fileContext);

    const [inputValue, setInputValue] = useState<string>('');

    const urlFlag: string = 'https://flagsapi.com/' + weatherData.url_country + '/flat/64.png'


    async function handleSearch(evt: FormEvent) {
        evt.preventDefault();

        if (!inputValue) {
            console.log('Escolha um cidade');
            return
        }

        const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=pt_br`;

        try {
            const response = await api.get(`${urlApi}`);

            const { data } = response;

            const localData: Weather = { ...weatherData };
            localData.city = data.name;
            localData.temp = parseInt(data.main.temp);
            localData.humidity = data.main.humidity;
            localData.url_country = data.sys.country;

            setWeatherData(localData);

            console.log(data);

        } catch (error) {
            console.log(error);

        }
    }

    function setValue(evt: ChangeEvent<HTMLInputElement>) {
        const value: string = evt.target.value;

        setInputValue(value);
    }

    return (
        <div className="modalSearch">
            <i className="fa-solid fa-xmark" onClick={() => setModalState(false)}></i>
            <h2>Pesquise o clima de uma cidade:</h2>
            <form onSubmit={(evt) => handleSearch(evt)} className='formSearch'>
                <input type="search" placeholder='Cidade' onChange={setValue} />
                <button className='btnSearch'>
                    <i className='fa-solid fa-magnifying-glass'></i>
                </button>
            </form>
            <div className="weatherData">
                <div className='cityInfo'>
                    {
                        weatherData.city &&
                        <div>
                            <i className='fa-solid fa-location-dot'></i>
                            <span>{weatherData.city}</span>
                        </div>
                    }
                    {weatherData.url_country && <img src={urlFlag} alt="Bandeira do País" />}
                </div>

                <div className="weatherStatus">
                    <p><span>{weatherData.temp}</span>&deg;C</p>
                    <p>
                        <i className='fa-solid fa-droplet'></i>
                        <span>{weatherData.humidity}%</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ModalSearch