import StartImg from "../../components/StartImg/startImg";
import UserSide from "../../components/UserSide";
import ErrorAlert from "../../components/ErrorAlert/error";

import { useContext } from 'react';
import fileContext from '../../context/fileContext';

function Forget() {

    const { errorContent, errorState } = useContext<any>(fileContext);

    return (
        <div className="container">
            <StartImg />

            <UserSide headline='Digite seu email cadastrado para redefinição de senha' inputName={false}
                inputPass={false} btnAction='Enviar' passForget={false} linkAction={false} />

            {errorState && <ErrorAlert content={errorContent} />}
        </div>
    )
}

export default Forget;