export const validate = (data , type)=>{
    const errors = {} ;

    if(!data.password){
        errors.password = "Password required"
    }else if(data.password.length<6){
        errors.password = "Password should be contained 6 characters or more"
    }else{
        delete errors.password;
    }

    if(!data.email){
        errors.email = "Email required"
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "Please enter a valid email"
    }else{
        delete errors.email;
    }

    if(type === "signup"){
        if(!data.name.trim()){
            errors.name = "Name required"
        }else{
            delete errors.name;
        }

        if(!data.confirmPassword){
            errors.confirmPassword = "Please confirm your password"
        }else if(data.confirmPassword !== data.password){
            errors.confirmPassword = "Password do not match"
        }else{
            delete errors.confirmPassword;
        }

        if(!data.isAccepted){
            errors.isAccepted = "You should be accepted our regulations"
        }else{
            delete errors.isAccepted
        }

    }

    return errors ;
}