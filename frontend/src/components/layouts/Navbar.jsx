// https://materializecss.com/getting-started.html
import { NavLink } from 'react-router-dom';

import styleNavbar from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={styleNavbar.mainDiv}>
            <p className={styleNavbar.subDiv}>
                <NavLink
                    style={({ isActive }) =>
                        isActive ? { color: 'lightgray' } : { color: 'white' }
                    }
                    to="/"
                    end
                >
                    Users
                </NavLink>
                <NavLink
                    style={({ isActive }) =>
                        isActive ? { color: 'lightgray' } : { color: 'white' }
                    }
                    to="add"
                >
                    Add user
                </NavLink>
            </p>
        </div>
    );
};

export default Navbar;
