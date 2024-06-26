import React, { useEffect, useState } from 'react'
import axios from "axios";
import apiUrl from "./../APIurls.json";

const SignUp: React.FC = () => {
    const [email, setEmail] = useState<string>("eve.holt@reqres.in");
    const [password, setPassword] = useState<string>("pistol");
    const [cpassword, setCpassword] = useState<string>("pistol");
    const [passMatch, setPassMatch] = useState<boolean>(false);

    type RegisterBody = {
        email: string;
        password: string; 
    }

    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(email && password && cpassword && password == cpassword ){
            let body:RegisterBody  = { email: email,password: password}
            let r = await axios.post(apiUrl.register,body)
            console.log(r)
        }
    }

    useEffect(() => {
        if(password === cpassword){
            setPassMatch(true);
        }else{
            setPassMatch(false);
        }

    },[cpassword,password])

  return (
    <div className='home-card-div'>
        <div className='home-card'>
            <div className='home-card-form-div'>
                <form className='card-form' onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="Login">Sign Up</label>
                    <input type="text" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <input type="password" placeholder='Enter Confirm Password' value={cpassword} onChange={(e) => setCpassword(e.target.value)} required />
                    <button type="submit" >Sign Up</button>
                </form>
            </div>  
        </div>
    </div>
  )
}

export default SignUp