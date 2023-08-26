import './home.css';
import menuIcon from '../../assets/menuIcon.svg';
import logout from '../../assets/logout.svg';
import avatar from '../../assets/avatar.svg';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    function handleLogout() {

        navigate('/Login');
    }

    return (
        <div className="containerHome">
            <div className='SideBar'>
                <div className='navField'>
                    <img src={menuIcon} alt="Menu" title='Menu' className='iconBar' />
                    <img src={logout} alt="Logout" title='Sair' className='iconBar' onClick={handleLogout} />
                </div>
            </div>
            <div className='contentHome'>
                <header>
                    <img src={avatar} alt="Avatar" title='Usuário logado' />
                </header>
                <main>
                    <h1>Content Home</h1>
                </main>
            </div>
        </div>
    );
}

export default Home;