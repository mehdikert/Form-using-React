import React from 'react';
import { useState } from 'react';
import "../src/styles/app.css"
import Users from "../src/data"
import userEmail from '../src/data';
function App() {
  return <div className='container'>
    <h1>Inscription : </h1>
    <form action="">
      <label htmlFor="" > Nom : <input id='nom' type="text" placeholder='Nom' /></label>
      <label htmlFor="" > Prenom : <input id='prenom' type="text" placeholder='Prenom' /></label>
      <label htmlFor="" > Email : <input id='email' type="email" placeholder='Email' /></label>
      <label htmlFor="" > Mot de passe : <input id='password' type="password" placeholder='Mot de passe' /></label>
      <button type='button' onClick={() => {

        if (!userEmail.includes(document.getElementById('email').value)) {
          Users.push(
            {
              name: `${document.getElementById('nom').value}`,
              prenom: `${document.getElementById('prenom').value}`,
              email: `${document.getElementById('email').value}`,
              password: `${document.getElementById('password').value}`
            })
          userEmail.push(document.getElementById('email').value)
          document.getElementById('nom').value = "";
          document.getElementById('prenom').value = "";
          document.getElementById('email').value = "";
          document.getElementById('password').value = "";
        } else {
          alert('email existe deja')
        }
        console.log(Users);
      }}>SUBMIT</button>
    </form>
  </div>
}

export default App