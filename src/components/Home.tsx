import axios from 'axios';
import React, { useState } from 'react'
import apiUrl from "./../APIurls.json"
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {

  const [email, setEmail] = useState<string>("eve.holt@reqres.in");
  const [password, setPassword] = useState<string>("pistol");

  type RegisterBody = {
    email: string;
    password: string;
  }

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      let body: RegisterBody = { email: email, password: password }
      let r = await axios.post(apiUrl.login, body)
      console.log(r)
      if(r?.data?.token){
        // navigate["/dashbord"];
      }
    }
  }

  // useEffect(() => {
  //     if(password === cpassword){
  //         setPassMatch(true);
  //     }else{
  //         setPassMatch(false);
  //     }

  // },[cpassword,password])

  return (
    <div className='home-card-div'>
      <div className='home-card'>
        <div className='home-card-form-div'>
          <form className='card-form' onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="Login">Login</label>
            <input type="text" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" >Sign In</button>
          </form>
        </div>
      </div>
    </div>
  )

}

export default Home