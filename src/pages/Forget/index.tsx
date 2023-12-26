import StartImg from "../../components/StartImg/startImg";
import UserSide from "../../components/UserSide";
import Checked from "../../components/CheckedAlert/checked";
import ErrorAlert from "../../components/ErrorAlert/error";

import { useContext } from 'react';
import fileContext from '../../context/fileContext';

function Forget() {

    const { errorContent, errorState, sentMail } = useContext<any>(fileContext);

    return (
        <div className="container">
            <StartImg />

            {
                !sentMail ?
                    <UserSide headline='Digite seu email cadastrado para redefinição de senha' inputName={false}
                        inputPass={false} btnAction='Enviar' passForget={false} linkAction={false} /> :

                    <Checked />
            }

            {errorState && <ErrorAlert content={errorContent} />}
        </div>
    )
}

export default Forget;