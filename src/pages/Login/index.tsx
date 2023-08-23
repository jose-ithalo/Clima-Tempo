import StartImg from '../../components/StartImg';
import UserSide from '../../components/UserSide';

function Login() {
    return (
        <div className="container">
            <StartImg />
            <div className='rightSide'>
                <UserSide headline='Olá, seja bem vindo(a)!' inputName={false}
                    btnAction='Entrar' passForget={true} linkAction={true} />
            </div>
        </div>
    );
}

export default Login;