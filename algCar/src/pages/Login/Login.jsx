import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import './Login.css';
import logoImg from '../../assets/logo.svg';

export const Login = () => {
    const navigate = useNavigate();
    const [credenciais, setCredenciais] = useState({ emailUsuario: '', senhaUsuario: ''});
  
    const handleLogin = (e) => {
      e.preventDefault();

      console.log("evento", e);

      const storedUser = JSON.parse(localStorage.getItem('usuario'));
      if(
        storedUser.emailUsuario === credenciais.emailUsuario &&
        storedUser.senhaUsuario === credenciais.nomeUsuario
      ){
        localStorage.setItem('isLogged', true);
        alert("Login realizado com sucesso!");
        navigate('/')
      }else {
        alert("Dados inválidos. Tente novamente!");
      }
    }

    return (
      <div className="section-login">
        <div className="login">
    
          <img src={logoImg} alt="imagem da logo" />
        
          <form onSubmit={handleLogin}>

            <div className="inputs">
                <input
                    type="email"
                    name="email"
                    placeholder="seu email"
                    value={credenciais.emailUsuario}
                    onChange={(e) => setCredenciais({ ...credenciais, emailUsuario: e.target.value })}
                    autoFocus 
                    required
                />
            </div>
  
            <div className="inputs">
                <input
                    type="password"
                    name="senha"
                    placeholder="sua senha"
                    value={credenciais.senhaUsuario}
                    onChange={(e) => setCredenciais({ ...credenciais, senhaUsuario: e.target.value })}
                    required
                />
            </div>
  
            <input type="submit" value="entrar" />
          </form>
          <p>
            Ainda não tem conta?{' '}
            <Link to='/cadastro'>Criar Conta</Link>
          </p>
        </div>
      </div>
    );
};

