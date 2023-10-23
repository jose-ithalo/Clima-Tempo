import './modal.css';

import api from '../../services/apiClima';

import { ChangeEvent, FormEvent, useState, useContext } from 'react';
import fileContext from '../../context/fileContext';

import Weather from '../../types/weather';

function ModalSearch() {

    const { setModalState, weatherData, setWeatherData } = useContext<any>(fileContext);

    const [inputValue, setInputValue] = useState<string>('');
    const [weatherError, setWeatherError] = useState<string>('');
    const [disabledState, setDisabledState] = useState<boolean>(true);

    const urlFlag: string = 'https://flagsapi.com/' + weatherData.url_country + '/flat/64.png'


    async function handleSearch(evt: FormEvent) {
        evt.preventDefault();

        if (!inputValue) {
            setWeatherError('Escolha um cidade');

            setTimeout(() => {
                setWeatherError('');
            }, 4000);
            return
        }

        const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=pt_br`;

        try {
            const response = await api.get(`${urlApi}`);

            const { data } = response;

            console.log(data);

            const localData: Weather = { ...weatherData };
            localData.city = data.name;
            localData.temp = parseInt(data.main.temp);
            localData.humidity = data.main.humidity;
            localData.url_country = data.sys.country;

            setWeatherData(localData);
            setDisabledState(false);

        } catch (error) {
            setWeatherError('Local não encontrado');
            setDisabledState(true);

            setTimeout(() => {
                setWeatherError('');
            }, 4000);
        }
    }

    function setValue(evt: ChangeEvent<HTMLInputElement>) {
        const value: string = evt.target.value;

        setInputValue(value);
    }

    function addCity() {
        if (!inputValue) {
            setWeatherError('Escolha um cidade');

            setTimeout(() => {
                setWeatherError('');
            }, 4000);
            return
        }

        setDisabledState(true);
        console.log('Cidade adicionada');
    }

    return (
        <div className="modalSearch">
            <i className="fa-solid fa-xmark" onClick={() => setModalState(false)}></i>
            <h2>Pesquise o clima de uma cidade:</h2>
            <form onSubmit={(evt) => handleSearch(evt)} className='formSearch'>
                <input type="search" placeholder='Cidade' onChange={setValue} />
                <div className='buttons'>
                    <button className='btnAction' title='Pesquisar Cidade'>
                        <i className='fa-solid fa-magnifying-glass'></i>
                    </button>
                    <button className='btnAction' title='Adicionar Cidade' type='button'
                        onClick={addCity} disabled={disabledState}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
                {weatherError && <p className='weatherError'>{weatherError}</p>}
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

                {
                    weatherData.temp !== 0 &&
                    <div className="weatherStatus">
                        <p><span>{weatherData.temp}</span>&deg;C</p>
                        <p>
                            <i className='fa-solid fa-droplet'></i>
                            <span>{weatherData.humidity}%</span>
                        </p>
                    </div>
                }
            </div>
        </div>
    )
}

export default ModalSearch