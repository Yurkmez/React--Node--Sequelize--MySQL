// https://stackoverflow.com/questions/42173786/react-router-pass-data-when-navigating-programmatically
// Об location.state. Переход в другой компонент с передачей параметров
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import axios from 'axios';

import styleUser from './user_edit.module.css';

const User = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: location.state.firstName,
        lastName: location.state.lastName,
        email: location.state.email,
        id: location.state.id,
    });

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:5000/edit/${formData.id}`, {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                id: formData.id,
            });
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <br />
                    <input
                        type="text"
                        name="firstName"
                        id="fname"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                firstName: e.target.value,
                            })
                        }
                        value={formData.firstName}
                        required
                        maxLength={20}
                    />
                    <br />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <br />
                    <input
                        type="text"
                        name="lastName"
                        id="lname"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                lastName: e.target.value,
                            })
                        }
                        value={formData.lastName}
                        required
                        maxLength={20}
                    />
                    <br />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        value={formData.email}
                        required
                        maxLength={40}
                    />
                    <br />
                </div>

                <button type="submit">Sign Up</button>
            </form>
        </>
    );
};

export default User;
