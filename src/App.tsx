import React, {createContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import SignUp from './components/SIgnUp';


// import logo from './logo.svg';
// import './App.css';

// let UserContext: unknown = createContext();



function App() {
  // useEffect
  return (
      // <UserContext.Provider user={} >
        <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
    </Router>
      // </UserContext.Provider>
      
    
  );
}

export default App;


{/* <header className='App-header'>
        <h1 className='headingStyle'> my app</h1>
      </header>
      <br />
      <nav className='navbar'>
        <h1>Secure User Management Dashboard</h1>
        </nav>

      <br />
      <div className='sign-in-form'>
        <form >
          <input type="text" placeholder='Enter User Name' />
          <input type="password" placeholder='Enter Password' />
          <input type="text" placeholder='Enter Mail' />
          <button>Sign</button>

        </form>

      </div> */}

    //   <div className="App">
    //   <Navbar />
      
    //   <div>
    //     <Sidebar />
    //     <MainCard />
    //   </div>
    // </div>