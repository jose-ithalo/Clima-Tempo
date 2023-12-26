import './checked.css';
import checkedImg from '../../assets/checked.svg';

function Checked() {
    return (
        <div className="checked">
            <h1>Em instantes você receberá um email.<br />Aguarde.</h1>
            <img className='checkedImg' src={checkedImg} alt="Imagem de ok" />
        </div>
    )
}

export default Checked;