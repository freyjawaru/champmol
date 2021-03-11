import React from 'react'
import { Link } from 'react-router-dom';
import './Layout.css';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="layout">
      <header>
        <Link to='/'><h1>Manuscripts from the Chartreuse de Champmol</h1></Link>
        {
          currentUser ?
            <>
              <p className="currentUser">{currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
            :
            <Link to='/login'>Login/Register</Link>
        }
        
        {
          currentUser &&
          <div className="navLinks">
            <Link className="itemLink" to='/items'>Items</Link>
            <Link to='/locations'>Locations</Link>
            
          </div>
        }
      </header>
      {props.children}
    </div>
  )
}
