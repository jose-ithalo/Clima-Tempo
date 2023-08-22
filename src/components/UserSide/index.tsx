import './userSide.css';
import userIcon from '../../assets/userIcon.svg';
import emailIcon from '../../assets/emailIcon.svg';
import padlock from '../../assets/padlock.svg';

function UserSide() {
    return (
        <div className='userArea'>
            <h1>Crie sua conta</h1>
            <form>
                <input type='text' placeholder='Nome completo' />
                <img src={userIcon} alt="Ícone usuário" className='iconInput' />

                <input type='email' placeholder='Email' />
                <img src={emailIcon} alt="Ícone e-mail" className='iconInput iconInputEmail' />

                <input type='password' placeholder='Senha' />
                <img src={padlock} alt="padlock" className='iconInput' />

                <button className='formButton' type='submit'>Registrar</button>
            </form>
        </div>
    );
}

export default UserSide;