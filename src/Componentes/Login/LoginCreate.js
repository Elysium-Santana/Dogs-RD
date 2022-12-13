import React, { useContext } from 'react';
import Button from '../forms/Button';
import Input from '../forms/Input';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');
  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      password: password.value,
      email: email.value,
    });
    const response = await fetch(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" {...username} />
        <Input label="Email" type="email" {...email} />
        <Input label="Senha" type="text" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
