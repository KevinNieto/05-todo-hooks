import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  const {setUser} = useContext(UserContext);

  return (
    <div>
        <h1>LoginScreen</h1>
        <hr/>
        <button
          className='btn btn-primary'
          onClick={()=>setUser({
            id: 1234,
            name: 'Fernando',
            email: 'fernando.herrera@gmail.com'
          })}
        >
          Login
        </button>
    </div>
  )
}
