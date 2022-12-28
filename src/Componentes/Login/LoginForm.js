import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';
import stylesbtn from '../forms/Button.module.css';
import useForm from '../../Hooks/useForm';
import UserContext from '../../UserContext';
import Button from '../forms/Button';
import Input from '../forms/Input';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handlesubmit(event) {
    event.preventDefault();

    if (password.validate() && username.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form action="" className={styles.form} onSubmit={handlesubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link to="/login/perdeu">Perdeu a senha? </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subTitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre no site.</p>
        <Link to="/login/criar" className={stylesbtn.button}>
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
