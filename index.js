import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { nUser } from '../../Class/Class';


const Signup = () => {

 

  const [loginData, setLoginData] = useState(new nUser());
  const [error, setError] = useState('');

  const handleChange = (e) => {
      setLoginData({...loginData, [e.target.id]: e.target.value})
  }

  const handleSubmit = e => {
      e.preventDefault();
      return axios.post('http://localhost:9000/Signup', loginData)
                  .then(res => console.log(res.data))
                  .catch(err => {
                  setError(error);
                  setLoginData({...new nUser()})
        })
  }

  const {pseudo, email, password, confirmPassword} = loginData;

  const btn =  pseudo === '' || email === '' || password === '' || password !== confirmPassword
  ? <button disabled>Inscription</button> : <button>Incription</button>

//gestion erreurs
   const errorMsg = error !== '' && <span>{error.message}</span>


  return (
    <div className="signUpLoginBox">
        <div className="slContainer">
            <div className='formBoxLeftSignup'>

            </div>
            <div className='formBoxRight'>
              <div className='formContent'>

                    {errorMsg}

                  <h2>Inscription</h2>
                  <form onSubmit={handleSubmit}>
                     <div className='inputBox'>
                        <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required />
                        <label htmlFor="pseudo">Pseudo</label>
                     </div>

                     <div className='inputBox'>
                        <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required />
                        <label htmlFor="email">Email</label>
                     </div>

                     <div className='inputBox'>
                        <input onChange={handleChange} value={password} type="password" id="password" autoComplete="off" required />
                        <label htmlFor="password">Mot de passe</label>
                     </div>

                     <div className='inputBox'>
                        <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required />
                        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                     </div>
                        {btn}
                  </form>

              </div>

            </div>
        </div>
      
    </div>
  )
}

export default Signup
