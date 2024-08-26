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
                    console.log(response.data);
                })
                .catch((error) => console.log(error));
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (user) {
            navigate('user', {
                state: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                },
            });
        }
    }, [user]);

    const handleUser = async (e, id) => {
        e.preventDefault();
        await Axios.get(`http://localhost:5000//${id}`)
            .then(function (response) {
                setUser(response.data);
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
                                onClick={(e) => handleUser(e, item.id)}
                            >
                                <strong>Show User</strong>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Users;
