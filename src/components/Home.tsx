import React from 'react'

const Home: React.FC = () => {
  return (
    <div className='home-card-div'>
        <div className='home-card'>
            <div className='home-card-form-div'>
                <form className='card-form'>
                    <label htmlFor="Login">Login</label>
                    <input type="text" placeholder='Enter Email'/>
                    <input type="password" placeholder='Enter Password' />
                    <button>sign in</button>
                </form>
            </div>  
        </div>
    </div>
  )
}

export default Home