import './button.css';
import delIcon from '../../assets/deleteIcon.svg';

import CityProp from '../../types/cityProp';

import api from '../../services/apiBase';

import fileContext from '../../context/fileContext';
import { useContext } from 'react';

function DelButton({ cityName }: CityProp) {

    const { setErrorDelete, setDeletedCity } = useContext<any>(fileContext);

    async function removeCity() {

        try {
            const token: string | null = localStorage.getItem('token');
            await api.delete('/users/cities', {
                headers: {
                    authorization: `Bearer ${token}`
                },
                data: {
                    city: cityName
                },
            });

            setDeletedCity(cityName);

        } catch (error) {
            setErrorDelete(true);

            setTimeout(() => {
                setErrorDelete(false);
            }, 5000);
        }
    }

    return (
        <div className='deleteButton' title='Remover cidade' onClick={removeCity}>
            <img src={delIcon} alt='Botão X' />
        </div>
    );
}

export default DelButton;