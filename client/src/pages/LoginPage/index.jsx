import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../../app/data';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Kiểm tra tài khoản mẫu từ users
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            alert('Đăng nhập thành công');
            localStorage.setItem('user', JSON.stringify(user)); // Lưu thông tin vào localStorage
            navigate('/admin/events'); // Chuyển hướng đến trang chính
        } else {
            alert('Tên đăng nhập hoặc mật khẩu không đúng');
        }
    };

    return (
        <div>
            <h2>Đăng nhập</h2>
            <input
                type="text"
                placeholder="Tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Đăng nhập</button>
        </div>
    );
};

export default LoginPage;
