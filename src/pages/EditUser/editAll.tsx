import './edit.css';
import api from '../../services/apiBase';
import FormEdit from '../../components/FormEdit/form';
import SuccessAlert from '../../components/SuccessAlert/success';
import ErrorAlert from '../../components/ErrorAlert/error';
import Loading from '../../components/Loading/loading';
import User from '../../types/user';

import { useContext, useEffect, useState } from 'react';
import fileContext from '../../context/fileContext';

function EditUser() {

    const { successState, errorContent, errorState } = useContext<any>(fileContext);

    const [stateLoading, setStateLoading] = useState<boolean>(true);
    const [userData, setUserData] = useState<User>({
        id: 0,
        username: '',
        email: ''
    });

    useEffect(() => {
        async function getUser() {
            const token: string | null = localStorage.getItem('token');

            const response = await api.get('/users/user', {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })

            const { data } = response;

            setUserData({
                id: data.id,
                username: data.username,
                email: data.email
            });

        }

        getUser();

        setTimeout(() => {
            setStateLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="editContainer">
            {stateLoading ? <Loading /> :
                <>
                    <FormEdit userName={userData.username} userEmail={userData.email} />
                    {successState && <SuccessAlert content='Os dados foram atualizados' />}
                    {errorState && <ErrorAlert content={errorContent} />}
                </>
            }
        </div>
    )
}

export default EditUser;