import React, { useState } from 'react';
import './Cadastro.css'; 
import {Link} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

export const Cadastro = () => {
 
  return (
    <div>
      <div className="section-cadastro">
        <div className="cadastro">
          
        <img src={logoImg} alt="imagem da logo" />

          <form>
            <div className="inputs-cadastro">
              <input
                type="text"
                name="name"
                placeholder="seu nome"
                autoFocus
                required
              />
            </div>

            <div className="inputs-cadastro">
              <input
                type="email"
                name="email"
                placeholder="seu email"
                autoFocus
                required
              />
            </div>

            <div className="inputs-cadastro">
              <input
                type="password"
                name="senha"
                placeholder="sua senha"
                required
              />
            </div>

            <div className="inputs-cadastro">
              <input
                type="password"
                name="senhaConfirme"
                placeholder="confirme sua senha"
                required
              />
            </div>

            <input type="submit" value="Criar" />
          </form>

          <p>
            Voltar à página de Login?{' '}
            <Link to='/login'>Clique aqui!</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
