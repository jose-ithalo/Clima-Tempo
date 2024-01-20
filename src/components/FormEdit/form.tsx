import './form.css';
import userIcon from '../../assets/userIcon.svg';
import emailIcon from '../../assets/emailIcon.svg';
import padlock from '../../assets/padlock.svg';

import HookForm from '../../types/hookForm';
import { TEdit } from '../../types/formType';

import { useForm } from 'react-hook-form';
import validator from 'validator';
import api from '../../services/apiBase';

function FormEdit({ userName, userEmail }: TEdit) {

    const { register, handleSubmit, formState: { errors } } = useForm<HookForm>();
    const token: string | null = localStorage.getItem('token');

    async function onSubmit(data: HookForm): Promise<void> {
        try {
            console.log(data);
            // await api.put('/users', {
            //     username: data.userName,
            //     email: data.email,
            //     password: data.password
            // }, {
            //     headers: {
            //         authorization: `Bearer ${token}`
            //     }
            // });

        } catch (error) {
            console.log('erro');

        }
    }

    return (
        <div className='editCard'>
            <h2>Alteração de dados</h2>
            <form className='formEdit'>
                <div className='editInput'>
                    <input type="text" placeholder='Novo nome' defaultValue={userName}
                        {...register('userName', { required: true })} />
                    <img src={userIcon} alt="Ícone usuário" className='iconInput' />
                </div>
                {errors.userName?.type === 'required' && <p className='errorInfo'>Digite seu nome</p>}

                <div className='editInput'>
                    <input type="text" placeholder='Novo email' defaultValue={userEmail}
                        {...register('email', { required: true, validate: (value) => validator.isEmail(value) })} />
                    <img src={emailIcon} alt="Ícone e-mail" className='iconInput iconInputEmail' />
                </div>
                {errors.email?.type === 'required' && <p className='errorInfo'>Digite seu e-mail</p>}
                {errors.email?.type === 'validate' && <p className='errorInfo'>Digite um email válido com @</p>}

                <div className='editInput'>
                    <input type="password" placeholder='Nova senha'
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
        </div>
    )
}

export default FormEdit;