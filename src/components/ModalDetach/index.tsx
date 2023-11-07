import './modal.css';

import fileContext from '../../context/fileContext';

import { useContext } from 'react';

function ModalDetach() {

    const { setDetachState } = useContext<any>(fileContext);

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
                    <button className='btnDelete'>Excluir</button>
                </section>
            </div>
        </div>
    )
}

export default ModalDetach;