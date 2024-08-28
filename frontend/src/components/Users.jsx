// https://stackoverflow.com/questions/42173786/react-router-pass-data-when-navigating-programmatically
// Переход в другой компонент с передачей параметров
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import styleUsers from './users.module.css';

const Users = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        async function fetchData() {
            Axios.get('http://localhost:5000/all')
                .then((response) => {
                    setUsers(response.data);
                })
                .catch((error) => console.log(error));
        }
        fetchData();
    }, []);

    // Переход на стр. user_edit происходит при изменении ~ user,
    // при нажатии кнопки "Edit User" -> "handleUserEdit" (setUser)
    // при этом в location (на странице user) есть свойство state
    // куда мы и передаем данные для отражения на странице
    useEffect(() => {
        if (user) {
            navigate('edit', {
                state: {
                    firstName: user[0].firstName,
                    lastName: user[0].lastName,
                    email: user[0].email,
                    id: user[0].id,
                },
            });
        }
    }, [user]);

    const handleUserEdit = async (e, id) => {
        e.preventDefault();
        await Axios.get(`http://localhost:5000/${id}`)
            .then(function (response) {
                setUser(response.data);
            })
            .catch(function (error) {
                alert(error);
            });
    };

    const handleDeleteUser = async (e, id) => {
        e.preventDefault();
        await Axios.delete(`http://localhost:5000/${id}`)
            .then(async function () {
                await Axios.get('http://localhost:5000/all')
                    .then((response) => {
                        setUsers(response.data);
                    })
                    .catch((error) => console.log(error));
            })
            .catch(function (error) {
                alert(error);
            });
    };

    if (!users)
        return (
            <>
                <p>No users </p>
            </>
        );
    return (
        <>
            <h2 className={styleUsers.head}>List of Users</h2>
            <div className={styleUsers.mainBlock}>
                {users.map((item) => {
                    return (
                        <div className={styleUsers.setBlock} key={item._id}>
                            <h2>{item.firstName}</h2>

                            <h4 className={styleUsers.marginLastName}>
                                {item.lastName}
                            </h4>
                            <Link
                                className={styleUsers.link}
                                onClick={(e) => handleUserEdit(e, item.id)}
                            >
                                <strong>Edit</strong>
                            </Link>
                            <Link
                                className={styleUsers.link}
                                onClick={(e) => handleDeleteUser(e, item.id)}
                            >
                                <strong>Delete</strong>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Users;
