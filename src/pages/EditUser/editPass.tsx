import './edit.css';
import FormEdit from '../../components/FormEdit/form';
import SuccessAlert from '../../components/SuccessAlert/success';
import ErrorAlert from '../../components/ErrorAlert/error';

import { useContext } from 'react';
import fileContext from '../../context/fileContext';

function EditPass() {

    const { successState, errorContent, errorState } = useContext<any>(fileContext);

    return (
        <div className="editContainer">
            <FormEdit resetInput={true} />
            {successState && <SuccessAlert content='Senha redefinida com sucesso' />}
            {errorState && <ErrorAlert content={errorContent} />}
        </div>
    )
}

export default EditPass;