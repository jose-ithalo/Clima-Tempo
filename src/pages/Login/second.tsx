import StartImg from '../../components/StartImg';
import UserSide from '../../components/UserSide';

function SecondLogin() {
    return (
        <div className="container">
            <StartImg />

            <UserSide headline='Olá, novamente!' inputName={false}
                btnAction='Entrar' passForget={true} />
        </div>
    );
}

export default SecondLogin;