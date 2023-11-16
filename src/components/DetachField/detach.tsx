import './detach.css';

import cloud from '../../assets/cloud.svg';

import apiBase from '../../services/apiBase';

import { useEffect, useState } from 'react';



function DetachField() {

    const [detachedCity, setDetachedCity] = useState<string>('');

    async function getDetach() {
        const token: string | null = localStorage.getItem('token');

        const response = await apiBase.get('/users/user', {
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        setDetachedCity(response.data.detached);
    }

    useEffect(() => {
        getDetach();
    }, [])

    return (
        <div className='fieldDetach'>
            <div className='leftDetails'>
                <div>
                    <img src={cloud} alt='Ícone' className='iconWeather' />
                    <h4>Chuva forte</h4>
                </div>
                <div>
                    <h1>19°</h1>
                    <h3>{detachedCity}, Brazil</h3>
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