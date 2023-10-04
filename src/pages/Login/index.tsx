import StartImg from '../../components/StartImg';
import UserSide from '../../components/UserSide';
import ErrorAlert from '../../components/ErrorAlert/error';

import { useContext, useEffect } from 'react';
import fileContext from '../../context/fileContext';

function Login() {

    const { errorContent, errorState, navigate } = useContext<any>(fileContext);

    useEffect((): void => {
        const token: string | null = localStorage.getItem('token');

        if (token) {
            navigate("/Home");
        }
    });

    return (
        <div className="container">
            <StartImg />

            <UserSide headline='Olá, seja bem vindo(a)!' inputName={false}
                btnAction='Entrar' passForget={true} linkAction={true} />

            {errorState && <ErrorAlert content={errorContent} />}
        </div>
    );
}

export default Login;