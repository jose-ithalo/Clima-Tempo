import './form.css';
import userIcon from '../../assets/userIcon.svg';
import emailIcon from '../../assets/emailIcon.svg';
import padlock from '../../assets/padlock.svg';
import keyIcon from '../../assets/keyIcon.svg';

import HookForm from '../../types/hookForm';
import { TEdit } from '../../types/formType';
import AxiosResponse from '../../types/axiosResponse';

import api from '../../services/apiBase';
import { useContext } from 'react';
import fileContext from '../../context/fileContext';

import { useForm } from 'react-hook-form';
import validator from 'validator';

function FormEdit({ userName, userEmail, resetInput }: TEdit) {
    const { setErrorContent, setErrorState, setSuccessState, navigate } = useContext<any>(fileContext);

    const { register, handleSubmit, formState: { errors } } = useForm<HookForm>();
    const token: string | null = localStorage.getItem('token');

    async function onSubmit(data: HookForm): Promise<void> {
        try {
            await api.put('/users', {
                username: data.userName,
                email: data.email,
                password: data.password
            }, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            setSuccessState(true);
            setTimeout((): void => {
                setSuccessState(false);
                navigate('/Home');
            }, 3000);

        } catch (error) {
            if (error !== null && typeof error === 'object'
                && 'response' in error && typeof error.response === 'object') {

                const { data } = error.response as AxiosResponse;

                if ('message' in data) {
                    setErrorContent(data.message);
                    setErrorState(true);
                    setTimeout((): void => {
                        setErrorState(false);
                    }, 4000);
                }
            }
        }
    }

    async function resetPass(data: HookForm): Promise<void> {
        try {
            await api.patch('/users/reset', {
                key: data.key,
                password: data.password
            });

            setSuccessState(true);
            setTimeout((): void => {
                setSuccessState(false);
            }, 3000);

        } catch (error) {
            if (error !== null && typeof error === 'object'
                && 'response' in error && typeof error.response === 'object') {

                const { data } = error.response as AxiosResponse;

                if ('message' in data) {
                    setErrorContent(data.message);
                    setErrorState(true);
                    setTimeout((): void => {
                        setErrorState(false);
                    }, 4000);
                }
            }
        }
    }

    return (
        <div className='editCard'>
            {
                !resetInput ?
                    <>
                        <h2>Alteração de dados</h2>
                        <form className='formEdit'>
                            <div className='editInput'>
                                <input type="text" placeholder='Novo nome' defaultValue={userName}
                                    {...register('userName', { required: true, pattern: /^[A-Za-z çáéíóú]+$/i })} />
                                <img src={userIcon} alt="Ícone usuário" className='iconInput' />
                            </div>
                            {errors.userName?.type === 'required' && <p className='errorInfo'>Digite seu nome</p>}
                            {errors.userName?.type === 'pattern' && <p className='errorInfo'>Digite apenas letras</p>}

                            <div className='editInput'>
                                <input type="text" placeholder='Novo email' defaultValue={userEmail}
                                    {...register('email', { required: true, validate: (value) => validator.isEmail(value) })} />
                                <img src={emailIcon} alt="Ícone e-mail" className='iconInput iconInputEmail' />
                            </div>
                            {errors.email?.type === 'required' && <p className='errorInfo'>Digite seu e-mail</p>}
                            {errors.email?.type === 'validate' && <p className='errorInfo'>Digite um email válido com @</p>}

                            <div className='editInput'>
                                <input type="text" placeholder='Nova senha'
                                    {...register('password', { minLength: 5 })} />
                                <img src={padlock} alt="padlock" className='iconInput' />
                            </div>

                            {
                                errors.password?.type === 'minLength' &&
                                <p className='errorInfo'>A senha deve ter no mínimo 5 caracteres</p>
                            }

                            <button className='formButton' type='button' onClick={() => handleSubmit(onSubmit)()}>
                                Alterar
                            </button>
                        </form>
                    </> :

                    <>
                        <h2>Redefinição de senha</h2>
                        <form className='formEdit'>
                            <div className='editInput'>
                                <input type="text" placeholder='Chave'
                                    {...register('key', { required: true })} />
                                <img src={keyIcon} alt="Chave" className='iconInput' />
                            </div>

                            {errors.key?.type === 'required' && <p className='errorInfo'>Digite sua chave</p>}

                            <div className='editInput'>
                                <input type="text" placeholder='Nova senha'
                                    {...register('password', { required: true, minLength: 5 })} />
                                <img src={padlock} alt="Cadeado" className='iconInput' />
                            </div>

                            {errors.password?.type === 'required' && <p className='errorInfo'>Digite sua senha</p>}
                            {
                                errors.password?.type === 'minLength' &&
                                <p className='errorInfo'>A senha deve ter no mínimo 5 caracteres</p>
                            }

                            <button className='formButton' type='button' onClick={() => handleSubmit(resetPass)()}>
                                Redefinir
                            </button>

                        </form>
                    </>
            }


        </div>
    )
}

export default FormEdit;