import { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData.firstName);
        try {
            const response = await axios.post('http://localhost:5000//add', {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
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

                <div>
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        id="pass"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            })
                        }
                        value={formData.password}
                        required
                        maxLength={15}
                    />
                    <br />
                </div>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default AddUser;
