import React , { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [touched , setTouched] = useState({})
    const [data , setData] = useState({
        email : "" ,
        password : "" 
    });
    const changeHandler = event =>{
        setData({...data , [event.target.name] : event.target.value})
    }
    const focusHandler = event =>{
        setTouched({...touched , [event.target.name] : true})
    }


    return (
        <div>
            <form>
                <h2>Login</h2>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                </div>
                <div>
                    <Link to="/signup" >SignUp</Link>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;