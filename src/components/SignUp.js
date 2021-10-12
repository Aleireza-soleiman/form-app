import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//function
import { validate } from '../functions/validate';
const SignUp = () => {
    const [touched , setTouched] = useState({})
    const [errors , setErrors] = useState({});
    const [data , setData] = useState({
        name : "" ,
        email : "" ,
        password : "" ,
        confirmPassword : "" ,
        isAccepted : false 
    });

    useEffect(()=>{
        setErrors(validate(data , "signup"))
    },[data , touched]);

    const changeHandler = event =>{
        if(event.target.name === "isAccepted"){
            setData({...data , [event.target.name] : event.target.checked })
        }else{
            setData({...data , [event.target.name] : event.target.value})
        }
    }
    const focusHandler = event =>{
        setTouched({...touched , [event.target.name] : true})
    }

    const submitHandler = event => event.preventDefault();

    return (
        <div>
            <form onSubmit={submitHandler} >
                <h2>SignUp</h2>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={data.name} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
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
                    <label>ConfirmPassword</label>
                    <input type="text" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler} />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div>
                    <div>
                        <label>I accept terms of privacy policy</label>
                        <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler} />
                        {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                    </div>
                </div>
                <div>
                    <Link to="/login" >Login</Link>
                    <button type="submit">SignUp</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;