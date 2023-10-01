import './userSide.css';
import userIcon from '../../assets/userIcon.svg';
import emailIcon from '../../assets/emailIcon.svg';
import padlock from '../../assets/padlock.svg';

import TForm from '../../types/formType';
import HookForm from '../../types/hookForm';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';


function UserSide({ headline, inputName, btnAction, passForget, linkAction }: TForm) {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<HookForm>();

    console.log(errors);

    function onSubmit(data: HookForm) {

        if (btnAction === 'Registrar') {
            navigate('/Login');
        }

        if (btnAction === 'Entrar') {
            console.log(data)
            navigate('/Home');
        }

    }

    return (
        <div className='userArea'>
            <h1 className='firstTitle hiddenTitle'>ClimaTempo</h1>
            <h2>{headline}</h2>
            <form>
                {
                    inputName &&
                    <>
                        <input type='text' placeholder='Nome completo' />
                        <img src={userIcon} alt="Ícone usuário" className='iconInput' />
                    </>
                }

                <input type='email' placeholder='Email' {...register('email', { required: true })} />
                <img src={emailIcon} alt="Ícone e-mail" className='iconInput iconInputEmail' />

                <input type='password' placeholder='Senha' {...register('password')} />
                <img src={padlock} alt="padlock" className='iconInput' />

                <button className='formButton' type='button' onClick={() => handleSubmit(onSubmit)()}>
                    {btnAction}
                </button>
            </form>

            {passForget && <span className='redirection'>Esqueci a senha</span>}

            {linkAction && <Link to='/SignUp' className='redirection'>Criar conta</Link>}

        </div>

    );
}

export default UserSide;