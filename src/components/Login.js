import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
//function
import { validate } from '../functions/validate';
const Login = () => {
    const [touched , setTouched] = useState({});
    const [errors , setErrors] = useState({});
    const [data , setData] = useState({
        email : "" ,
        password : "" 
    });

    useEffect(()=>{
        setErrors(validate(data , "login"))
    },[data , touched]);

    const changeHandler = event =>{
        setData({...data , [event.target.name] : event.target.value})
    }
    const focusHandler = event =>{
        setTouched({...touched , [event.target.name] : true})
    }
    const submitHandler = event => event.preventDefault();

    return (
        <div>
            <form onSubmit={submitHandler} >
                <h2>Login</h2>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
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