import './signUp.css';
import StartImg from '../../components/StartImg';
import UserSide from '../../components/UserSide';

function SignUp() {
    return (
        <div className="container">
            <StartImg />
            <div className='rightSide'>
                <UserSide headline='Crie sua conta' inputName={true} btnAction='Registrar' />
            </div>
        </div>
    );
}

export default SignUp;