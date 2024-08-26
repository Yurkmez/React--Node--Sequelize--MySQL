import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Users from './components/Users';
import User from './components/User';
import AddUser from './components/AddUser';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index={true} element={<Users />}></Route>
                        <Route path="user" element={<User />}></Route>
                        <Route path="add" element={<AddUser />}></Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
