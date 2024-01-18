import './edit.css';
import FormEdit from '../../components/FormEdit/form';

import { useContext } from 'react';
import fileContext from '../../context/fileContext';

function EditUser() {

    const { userData } = useContext<any>(fileContext);

    return (
        <div className="editContainer">
            <FormEdit userName={userData.username} userEmail={userData.email} />
        </div>
    )
}

export default EditUser;