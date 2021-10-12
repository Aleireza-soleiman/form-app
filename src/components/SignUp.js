import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [touched , setTouched] = useState({})
    const [data , setData] = useState({
        name : "" ,
        email : "" ,
        password : "" ,
        confirmPassword : "" ,
        isAccepted : true 
    });
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

    return (
        <div>
            <form>
                <h2>SignUp</h2>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={data.name} onChange={changeHandler} onFocus={focusHandler} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                </div>
                <div>
                    <label>ConfirmPassword</label>
                    <input type="text" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler} />
                </div>
                <div>
                    <div>
                        <label>I accept terms of privacy policy</label>
                        <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler} />
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