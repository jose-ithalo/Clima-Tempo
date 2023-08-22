import './userSide.css';

function UserSide() {
    return (
        <div className='userArea'>
            <h1>Crie sua conta</h1>
            <form>
                <input type='text' placeholder='Nome completo' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Senha' />
                <button className='formButton' type='submit'>Registrar</button>
            </form>
        </div>
    )
}

export default UserSide;