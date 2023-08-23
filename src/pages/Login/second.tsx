import StartImg from '../../components/StartImg';
import UserSide from '../../components/UserSide';

function SecondLogin() {
    return (
        <div className="container">
            <StartImg />
            <div className='rightSide'>
                <UserSide headline='Olá, novamente!' inputName={false}
                    btnAction='Entrar' passForget={true} />
            </div>
        </div>
    );
}

export default SecondLogin;