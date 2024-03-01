import './home.css';
import logout from '../../assets/logout.svg';
import plus from '../../assets/plus.svg';

import BasicMenu from '../../components/Menu/menu';
import DetachField from '../../components/DetachField/detach';
import CardWeather from '../../components/CardWeather';
import ModalSearch from '../../components/ModalSearch/modal';
import ModalDetach from '../../components/ModalDetach/modal';
import ErrorAlert from '../../components/ErrorAlert/error';
import Loading from '../../components/Loading/loading';

import api from '../../services/apiBase';

import { useContext, useEffect, useState } from 'react';
import fileContext from '../../context/fileContext';

function Home() {

    const {
        modalState, setModalState, errorDelete,
        navigate, detachState
    } = useContext<any>(fileContext);

    const [fullName, setFullName] = useState<string[]>([]);
    const [cityList, setCityList] = useState<string[]>([]);
    const [errorList, setErrorList] = useState<boolean>(false);
    const [detachedCity, setDetachedCity] = useState<string>('');
    const [stateLoading, setStateLoading] = useState<boolean>(true);


    function handleLogout(): void {

        localStorage.removeItem('token');

        navigate('/Login');
    }

    useEffect(() => {
        async function showCities(): Promise<void> {
            const token: string | null = localStorage.getItem('token');
            try {
                const response = await api.get('/users/cities', {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                });

                setCityList(response.data);
            } catch (error) {
                setErrorList(true);

                setTimeout(() => {
                    setErrorList(false);
                    localStorage.removeItem('token');
                }, 3000);
            }
        }
        showCities();

        async function getDetach(): Promise<void> {
            const token: string | null = localStorage.getItem('token');
            try {
                const response = await api.get('/users/user', {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                });

                setFullName(response.data.username.split(' '));
                setDetachedCity(response.data.detached);

            } catch (error) {
                setErrorList(true);

                setTimeout(() => {
                    setErrorList(false);
                    localStorage.removeItem('token');
                }, 3000);

            }

        }
        setTimeout(() => {
            getDetach();
        }, 1000);

        setTimeout(() => {
            setStateLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="containerHome">
            {stateLoading ? <Loading /> :
                <>
                    <div className='sideBar'>
                        <BasicMenu />
                        <img src={logout} alt="Logout" title='Sair' className='iconBar' onClick={handleLogout} />
                    </div>
                    <div className='contentHome'>
                        <header>
                            <div className='menuHeader'>
                                <BasicMenu />
                                <img src={logout} alt="Logout" title='Sair' className='iconBar' onClick={handleLogout} />
                            </div>
                            <div className='symbol' title={fullName.join(' ')}>
                                <h4>{fullName[0][0]}</h4>
                                {fullName.length > 1 && <h4>{fullName[1][0]}</h4>}
                            </div>
                        </header>
                        <main>
                            <section>
                                <DetachField cityName={detachedCity} />
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
                    {errorList && <ErrorAlert content='Erro ao carregar dados da cidade' />}
                </>
            }
            {detachState && <ModalDetach />}
        </div>
    );
}

export default Home;