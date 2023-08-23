import './userSide.css';
import userIcon from '../../assets/userIcon.svg';
import emailIcon from '../../assets/emailIcon.svg';
import padlock from '../../assets/padlock.svg';

import TForm from '../../types/formType';

function UserSide({ headline, inputName, btnAction }: TForm) {
    return (
        <div className='userArea'>
            <h1>{headline}</h1>
            <form>
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

            <span>Esqueci a senha</span>
        </div>
    );
}

export default UserSide;