import './modal.css';

import ErrorAlert from '../ErrorAlert/error';

import api from '../../services/apiBase';
import fileContext from '../../context/fileContext';

import { useContext } from 'react';

function ModalDetach() {

    const { chosenCity, errorState, setErrorState, setDetachState } = useContext<any>(fileContext);

    async function removeCity() {
        try {
            const token: string | null = localStorage.getItem('token');
            await api.delete('/users/cities', {
                headers: {
                    authorization: `Bearer ${token}`
                },
                data: {
                    city: chosenCity
                },
            });
            window.location.reload();

        } catch (error) {
            setErrorState(true);

            setTimeout(() => {
                setErrorState(false)
            }, 3000);
        }

    }

    return (
        <div className='containerDetach'>
            <div className='modalDetach'>
                <i className="fa-solid fa-xmark" onClick={() => setDetachState(false)}></i>
                <section className='detachSection'>
                    <h2>Deseja destacar essa cidade ?</h2>
                    <button className='btnDetach'>Destacar</button>
                </section>
                <section>
                    <h2>Deseja excluir essa cidade ?</h2>
                    <button className='btnDelete' onClick={removeCity}>Excluir</button>
                </section>
            </div>
            {errorState && <ErrorAlert content='Erro ao remover cidade' />}
        </div>
    )
}

export default ModalDetach;