import './home.css';
import menuIcon from '../../assets/menuIcon.svg';
import logout from '../../assets/logout.svg';
import avatar from '../../assets/avatar.svg';
import cloud from '../../assets/cloud.svg';
import plus from '../../assets/plus.svg';

import CardWeather from '../../components/CardWeather';
import ModalSearch from '../../components/ModalSearch';

import { useContext } from 'react';
import fileContext from '../../context/fileContext';

function Home() {

    const { modalState, setModalState, navigate } = useContext<any>(fileContext);

    function handleLogout(): void {

        localStorage.removeItem('token');

        navigate('/Login');
    }

    return (
        <div className="containerHome">
            <div className='sideBar'>
                <img src={menuIcon} alt="Menu" title='Menu' className='iconBar' />
                <img src={logout} alt="Logout" title='Sair' className='iconBar' onClick={handleLogout} />
            </div>
            <div className='contentHome'>
                <header>
                    <img src={avatar} alt="Avatar" title='Usuário logado' />
                </header>
                <main>
                    <section className='fieldDetail'>
                        <div className='leftDetails'>
                            <div>
                                <img src={cloud} alt='Ícone' className='iconWeather' />
                                <h4>Chuva forte</h4>
                            </div>
                            <div>
                                <h1>19°</h1>
                                <h3>São Paulo, Brazil</h3>
                            </div>
                        </div>
                        <div className='rightDetails'>
                            <h2>7:30 pm</h2>
                            <h3>Quarta-feira</h3>
                        </div>
                    </section>
                    <section className='fieldOption'>
                        <div className='upperContent'>
                            <h3>Temperaturas</h3>
                            <button className='addButton' onClick={() => setModalState(true)}>
                                <img src={plus} alt="Sinal de mais" />
                                Adicionar cidade
                            </button>
                        </div>
                        <div className='weatherReports'>
                            <CardWeather />
                            <CardWeather />
                            <CardWeather />
                            <CardWeather />
                            <CardWeather />
                            <CardWeather />

                        </div>
                    </section>
                </main>
            </div>
            {modalState && <ModalSearch />}
        </div>
    );
}

export default Home;