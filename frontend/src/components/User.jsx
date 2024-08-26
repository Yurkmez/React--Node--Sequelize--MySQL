// https://stackoverflow.com/questions/42173786/react-router-pass-data-when-navigating-programmatically
// Об location.state. Переход в другой компонент с передачей параметров
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Axios from 'axios';

import styleUser from './user.module.css';

const User = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <div>
                <div className={styleUser.rowCourse}>
                    <h1 className={styleUser.courseName}>User</h1>
                    <h2>"{location.state.firstName}"</h2>
                    <h2>Id {location.state.lastName}</h2>
                    <p>{location.state.email}</p>
                </div>
            </div>
        </>
    );
};

export default User;
