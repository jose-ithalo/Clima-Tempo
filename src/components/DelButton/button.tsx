import './button.css';
import delIcon from '../../assets/deleteIcon.svg'

function DelButton() {

    return (
        <div className='deleteButton'>
            <img src={delIcon} alt='Botão X' />
        </div>
    );
}

export default DelButton;