import './signUp.css';
import StartImg from '../../components/StartImg';
import UserSide from '../../components/UserSide';

function SignUp() {
    return (
        <div className="container">
            <StartImg />
            <div className='rightSide'>
                <UserSide />
            </div>
        </div>
    );
}

export default SignUp;