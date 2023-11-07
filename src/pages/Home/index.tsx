import './home.css';
import menuIcon from '../../assets/menuIcon.svg';
import logout from '../../assets/logout.svg';
import avatar from '../../assets/avatar.svg';
import cloud from '../../assets/cloud.svg';
import plus from '../../assets/plus.svg';

import CardWeather from '../../components/CardWeather';
import ModalSearch from '../../components/ModalSearch';
import ModalDetach from '../../components/ModalDetach';
import ErrorAlert from '../../components/ErrorAlert/error';
import Loading from '../../components/Loading/loading';

import api from '../../services/apiBase';

import { useContext, useEffect, useState } from 'react';
import fileContext from '../../context/fileContext';

function Home() {

    const { modalState, setModalState, errorDelete, errorState, setErrorState, navigate } = useContext<any>(fileContext);

    const [cityList, setCityList] = useState<string[]>([]);
    const [stateLoading, setStateLoading] = useState<boolean>(true);

    async function showCities(): Promise<void> {

        try {
            const token: string | null = localStorage.getItem('token');
            const response = await api.get('/users/cities', {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            setCityList(response.data);
        } catch (error) {
            setErrorState(true);

            setTimeout(() => {
                setErrorState(false);
                localStorage.removeItem('token')
            }, 3000);
        }
    }

    function handleLogout(): void {

        localStorage.removeItem('token');

        navigate('/Login');
    }

    useEffect(() => {
        showCities();
        setTimeout(() => {
            setStateLoading(false);
        }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="containerHome">
            {stateLoading ? <Loading /> :
                <>
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
                                    {errorDelete && <p className='deleteError'>Erro na exclusão</p>}
                                    <button className='addButton' onClick={() => setModalState(true)}>
                                        <img src={plus} alt="Sinal de mais" />
                                        Adicionar cidade
                                    </button>
                                </div>
                                <div className='weatherReports'>
                                    {cityList.map((city, index) => (
                                        <CardWeather key={index} cityName={city} />
                                    ))}
                                </div>
                            </section>
                        </main>
                    </div>
                    {modalState && <ModalSearch />}
                    {errorState && <ErrorAlert content='Erro ao carregar dados da cidade' />}
                </>
            }
            <ModalDetach />
        </div>
    );
}

export default Home;