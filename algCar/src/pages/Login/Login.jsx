import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './Login.css';
import logoImg from '../../assets/logo.svg';


export const Login = () => {
  
    return (
      <div className="section-login">
        <div className="login">
          <div className="img">
            <img src={logoImg} alt="imagem da logo" />
          </div>
  
          <form>
            <div className="inputs">
                <input
                    type="email"
                    name="email"
                    placeholder="seu email"
                    autoFocus 
                    required
                />
            </div>
  
            <div className="inputs">
                <input
                    type="password"
                    name="senha"
                    placeholder="sua senha"
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

