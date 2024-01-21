import './edit.css';
import FormEdit from '../../components/FormEdit/form';
import SuccessAlert from '../../components/SuccessAlert/success';

import { useContext } from 'react';
import fileContext from '../../context/fileContext';

function EditUser() {

    const { userData, successState } = useContext<any>(fileContext);

    return (
        <div className="editContainer">
            <FormEdit userName={userData.username} userEmail={userData.email} />
            {successState && <SuccessAlert content='Os dados foram atualizados' />}
        </div>
    )
}

export default EditUser;