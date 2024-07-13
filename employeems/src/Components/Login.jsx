// Login.jsx
import { useState } from 'react';
import axios from 'axios';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [values, setValues] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    axios.defaults.withCredentials = true;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/auth/adminlogin', values)
            .then(result => {
                if (result.data.loginStatus) {
                    navigate('/dashboard')
                } else {
                    setError(result.data.Error)
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
                <div className='p-3 rounded w-25 border loginForm'>
                    <div className='text-danger'>
                        {error && error}
                    </div>
                    <h2>Login Page</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="email"><strong>Email:</strong></label>
                            <input onChange={handleChange} type="email" name='email' autoComplete='off' placeholder='Enter Email' className='form-control rounded-0' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password"><strong>Password:</strong></label>
                            <input onChange={handleChange} type="password" name='password' placeholder='Enter Password' className='form-control rounded-0' />
                        </div>
                        <button className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
                        <div className='mb-1'>
                            <input type="checkbox" name="tick" id="tick" className='me-2' />
                            <label htmlFor="password">You are Agree with terms & conditions</label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
