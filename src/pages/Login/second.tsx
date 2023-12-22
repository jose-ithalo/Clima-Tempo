import StartImg from '../../components/StartImg/startImg';
import UserSide from '../../components/UserSide';
import ErrorAlert from '../../components/ErrorAlert/error';

import { useContext, useEffect } from 'react';
import fileContext from '../../context/fileContext';

function SecondLogin() {

    const { errorContent, errorState, navigate } = useContext<any>(fileContext);

    useEffect((): void => {
        const token: string | null = localStorage.getItem('token');

        if (token) {
            navigate("/Home")
        }
    })

    return (
        <div className="container">
            <StartImg />

            <UserSide headline='Olá, novamente!' inputName={false}
                inputPass={true} btnAction='Entrar' passForget={true} />

            {errorState && <ErrorAlert content={errorContent} />}
        </div>
    );
}

export default SecondLogin;