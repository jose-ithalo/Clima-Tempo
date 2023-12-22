import './userSide.css';
import userIcon from '../../assets/userIcon.svg';
import emailIcon from '../../assets/emailIcon.svg';
import padlock from '../../assets/padlock.svg';

import TForm from '../../types/formType';
import HookForm from '../../types/hookForm';
import AxiosResponse from '../../types/axiosResponse';

import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import api from '../../services/apiBase';

import { useContext } from 'react';
import fileContext from '../../context/fileContext';
import { keyboardKey } from '@testing-library/user-event';


function UserSide({ headline, inputName, inputPass, btnAction, passForget, linkAction }: TForm) {

    const { setErrorContent, setErrorState, setSuccessState, navigate } = useContext<any>(fileContext);

    const { register, handleSubmit, formState: { errors } } = useForm<HookForm>();

    async function onSubmit(data: HookForm): Promise<void> {

        if (btnAction === 'Registrar') {

            try {

                await api.post('users', {
                    username: data.userName,
                    email: data.email,
                    password: data.password
                });

                setSuccessState(true);
                setTimeout((): void => {
                    setSuccessState(false);
                    navigate('/Login');
                }, 5000);


            } catch (error) {
                if (error !== null && typeof error === 'object'
                    && 'response' in error && typeof error.response === 'object') {

                    const { data } = error.response as AxiosResponse;

                    if ('message' in data) {
                        setErrorContent(data.message);
                        setErrorState(true);
                        setTimeout((): void => {
                            setErrorState(false);
                        }, 7000);
                    }
                }
            }
        }

        if (btnAction === 'Entrar') {

            try {

                const response = await api.post('/login', {
                    email: data.email,
                    password: data.password
                });

                const { access_token } = response.data;

                localStorage.setItem('token', access_token);

                navigate('/Home');
            } catch (error) {
                if (error !== null && typeof error === 'object'
                    && 'response' in error && typeof error.response === 'object') {

                    const { data } = error.response as AxiosResponse;

                    if ('message' in data) {
                        setErrorContent(data.message);
                        setErrorState(true);
                        setTimeout((): void => {
                            setErrorState(false);
                        }, 7000);
                    }
                }
            }
        }
    }

    function inputSubmit(evt: keyboardKey): void {
        if (evt.code === 'Enter' || evt.code === 'NumpadEnter') {
            handleSubmit(onSubmit)();
        }
    }

    return (
        <div className='userArea'>
            <h1 className='firstTitle hiddenTitle'>ClimaTempo</h1>
            <h2>{headline}</h2>
            <form>
                {
                    inputName &&
                    <div className="formGroup">
                        <input type='text' placeholder='Nome completo' onKeyUp={inputSubmit}
                            {...register('userName', { required: true })} />
                        <img src={userIcon} alt="Ícone usuário" className='iconInput' />
                    </div>
                }
                {errors.userName?.type === 'required' && <p className='errorInfo'>Digite seu nome</p>}

                <div className='formGroup'>
                    <input type='email' placeholder='Email' onKeyUp={inputSubmit}
                        {...register('email', {
                            required: true,
                            validate: (value) => validator.isEmail(value)
                        })} />
                    <img src={emailIcon} alt="Ícone e-mail" className='iconInput iconInputEmail' />
                </div>
                {errors.email?.type === 'required' && <p className='errorInfo'>Digite seu e-mail</p>}
                {errors.email?.type === 'validate' && <p className='errorInfo'>Digite um email válido com @</p>}

                {
                    inputPass &&
                    <div className='formGroup'>
                        <input type='password' placeholder='Senha' onKeyUp={inputSubmit}
                            {...register('password', { required: true, minLength: 5 })} />
                        <img src={padlock} alt="padlock" className='iconInput' />
                    </div>
                }
                {errors.password?.type === 'required' && <p className='errorInfo'>Digite sua senha</p>}
                {
                    errors.password?.type === 'minLength' &&
                    <p className='errorInfo'>A senha deve ter no mínimo 5 caracteres</p>
                }

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