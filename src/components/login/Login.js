import React from 'react'
import './Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container-login">
    <div className="wrapper-login">
      <div className="title-login">Ingresá a tu cuenta</div>
      <form>
        <input className="input-login" placeholder="usuario" />
        <input className="input-login" placeholder="password" />
        <button className="btn-crear">INGRESAR</button>
        <Link className='password' to={"/refoundpassword"}>Olvidaste tu contraseña?</Link>
      </form>
    </div>
  </div>
  )
}

export default Login;