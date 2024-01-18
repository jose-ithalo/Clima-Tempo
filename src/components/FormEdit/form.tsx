import './form.css';
import userIcon from '../../assets/userIcon.svg';
import emailIcon from '../../assets/emailIcon.svg';
import padlock from '../../assets/padlock.svg';

import HookForm from '../../types/hookForm';
import { TEdit } from '../../types/formType';

import { useForm } from 'react-hook-form';
import validator from 'validator';

function FormEdit({ userName, userEmail }: TEdit) {

    const { register, handleSubmit, formState: { errors } } = useForm<HookForm>();

    function onSubmit(data: HookForm): void {
        console.log(data);
    }

    return (
        <div className='editCard'>
            <h2>Alteração de dados</h2>
            <form className='formEdit'>
                <div className='editInput'>
                    <input type="text" placeholder='Novo nome' value={userName}
                        {...register('userName', { required: true })} />
                    <img src={userIcon} alt="Ícone usuário" className='iconInput' />
                </div>
                {errors.userName?.type === 'required' && <p className='errorInfo'>Digite seu nome</p>}

                <div className='editInput'>
                    <input type="text" placeholder='Novo email' value={userEmail}
                        {...register('email', { required: true, validate: (value) => validator.isEmail(value) })} />
                    <img src={emailIcon} alt="Ícone e-mail" className='iconInput iconInputEmail' />
                </div>
                {errors.email?.type === 'required' && <p className='errorInfo'>Digite seu e-mail</p>}
                {errors.email?.type === 'validate' && <p className='errorInfo'>Digite um email válido com @</p>}

                <div className='editInput'>
                    <input type="password" placeholder='Nova senha'
                        {...register('password', { required: true, minLength: 5 })} />
                    <img src={padlock} alt="padlock" className='iconInput' />
                </div>
                {errors.password?.type === 'required' && <p className='errorInfo'>Digite sua senha</p>}

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