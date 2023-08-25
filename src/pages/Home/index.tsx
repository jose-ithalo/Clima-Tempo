import './home.css';
import menuIcon from '../../assets/menuIcon.svg';
import logout from '../../assets/logout.svg';
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
                <header></header>
                <main>
                    <h1>Content Home</h1>
                </main>
            </div>
        </div>
    );
}

export default Home;