import './form.css';
import userIcon from '../../assets/userIcon.svg';
import emailIcon from '../../assets/emailIcon.svg';
import padlock from '../../assets/padlock.svg';

function FormEdit() {
    return (
        <div className='editCard'>
            <div className="formEdit">
                <h2>Alteração de dados</h2>
                <form>
                    <div className='editInput'>
                        <input type="text" placeholder='Novo nome' />
                        <img src={userIcon} alt="Ícone usuário" className='iconInput' />
                    </div>

                    <div className='editInput'>
                        <input type="text" placeholder='Novo email' />
                        <img src={emailIcon} alt="Ícone e-mail" className='iconInput iconInputEmail' />
                    </div>

                    <div className='editInput'>
                        <input type="password" placeholder='Nova senha' />
                        <img src={padlock} alt="padlock" className='iconInput' />
                    </div>

                    <button className='formButton' type='button'>
                        Alterar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormEdit;