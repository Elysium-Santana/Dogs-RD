import React, { Children } from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../Hooks/useForm';
import UserContext from '../../UserContext';
import Button from '../forms/Button';
import Input from '../forms/Input';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  async function handlesubmit(event) {
    event.preventDefault();

    if (password.validate() && username.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handlesubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input
          label="Senha"
          type="current-password"
          name="password"
          {...password}
        />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
