import './login.css'
import StartImg from '../../components/StartImg';
import UserSide from '../../components/UserSide';

function Login() {
    return (
        <div className="container">
            <StartImg />
            <div className='rightSide'>
                <UserSide headline='Olá, novamente!' inputName={false} btnAction='Entrar' />
            </div>
        </div>
    )
}

export default Login;