import './userSide.css';
import userIcon from '../../assets/userIcon.svg';
import emailIcon from '../../assets/emailIcon.svg';
import padlock from '../../assets/padlock.svg';

import TForm from '../../types/formType';
import { Link, useNavigate } from 'react-router-dom';


function UserSide({ headline, inputName, btnAction, passForget, linkAction }: TForm) {

    const navigate = useNavigate();

    function handleSubmit() {

        if (btnAction === 'Registrar') {
            navigate('/Login');
        } else if (btnAction === 'Entrar') {
            navigate('/Home');
        }

    }

    return (
        <div className='userArea'>
            <h1>{headline}</h1>
            <form onSubmit={handleSubmit}>
                {
                    inputName &&
                    <>
                        <input type='text' placeholder='Nome completo' />
                        <img src={userIcon} alt="Ícone usuário" className='iconInput' />
                    </>
                }

                <input type='email' placeholder='Email' />
                <img src={emailIcon} alt="Ícone e-mail" className='iconInput iconInputEmail' />

                <input type='password' placeholder='Senha' />
                <img src={padlock} alt="padlock" className='iconInput' />

                <button className='formButton' type='submit'>{btnAction}</button>
            </form>

            {passForget && <span className='redirection'>Esqueci a senha</span>}

            {linkAction && <Link to='/SignUp' className='redirection'>Criar conta</Link>}

        </div>
    );
}

export default UserSide;