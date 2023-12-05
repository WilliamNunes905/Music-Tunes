import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import { Loading } from '../../components/Loading';
import Button from '../../components/Button';
import './login.css';

function Login() {
  const [name, setFormInfo] = useState('');
  const [removeLoading, setRemoveLoading] = useState(true);
  const navigate = useNavigate();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInfo(event.target.value);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setRemoveLoading(false);
    try {
      await createUser({ name });
      navigate('/search');
    } catch (error) {
      console.error('Erro ao salvar o nome:', error);
    }
  }

  return (
    <div className="container-login">
      <div className="container-forms">
        <form
          onSubmit={ (event) => handleSubmit(event) }
        >
          <h1 className="name-music">Music Tunes</h1>
          <label>
            <input
              value={ name }
              onChange={ (event) => handleChange(event) }
              type="text"
              placeholder="Digite seu nome"
              className="login-name-input"
            />
          </label>
          <Button
            type="submit"
            className="login-submit-button"
            disabled={ name.length < 3 }
          >
            Entrar
          </Button>
          {!removeLoading && (<Loading className="loading-page" />)}
        </form>
      </div>
    </div>
  );
}

export default Login;
