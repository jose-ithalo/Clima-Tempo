import './modal.css';

import { ChangeEvent, FormEvent, useState, useContext } from 'react';
import fileContext from '../../context/fileContext';

function ModalSearch() {

    const { setModalState } = useContext<any>(fileContext);

    const [inputValue, setInputValue] = useState<string>('');

    function handleSearch(evt: FormEvent) {
        evt.preventDefault();

        console.log(inputValue);
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
                <input type="search" placeholder='Digite o nome da cidade' onChange={setValue} />
                <button className='btnSearch'>
                    <i className='fa-solid fa-magnifying-glass'></i>
                </button>
            </form>
            <div className="weatherData">
                <div className='cityInfo'>
                    <div>
                        <i className='fa-solid fa-location-dot'></i>
                        <span>Cidade</span>
                    </div>
                    <img src="https://flagsapi.com/BR/flat/64.png" alt="Bandeira do País" />
                </div>
                <div className="weatherStatus">
                    <p><span>32</span>&deg;C</p>
                    <p>
                        <i className='fa-solid fa-droplet'></i>
                        <span>48%</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ModalSearch