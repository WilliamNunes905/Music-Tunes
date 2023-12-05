import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import { Loading } from '../../components/Loading';
import Button from '../../components/Button';
import styles from './login.module.css';

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
      <div className={ styles.containerForms }>
        <form
          onSubmit={ (event) => handleSubmit(event) }
        >
          <h1 className={ styles.nameMusic }>Music Tunes</h1>
          <label>
            <input
              value={ name }
              onChange={ (event) => handleChange(event) }
              type="text"
              placeholder="Digite seu nome"
              className={ styles.inputName }
            />
          </label>
          <Button
            type="submit"
            className={ styles.submitButton }
            disabled={ name.length < 3 }
          >
            Entrar
          </Button>
          {!removeLoading && (<Loading className={ styles.loadingPage } />)}
        </form>
      </div>
    </div>
  );
}

export default Login;
