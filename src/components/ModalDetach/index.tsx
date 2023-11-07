import './modal.css';

function ModalDetach() {
    return (
        <div className='containerDetach'>
            <div className='modalDetach'>
                <i className="fa-solid fa-xmark"></i>
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