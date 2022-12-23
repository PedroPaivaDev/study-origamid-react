import React from 'react';
import { Link } from 'react-router-dom';
import URL from '../../service/URL';
import Input from '../Forms/Input';
import Button from '../Forms/Button';

const LoginForm = () => {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`${URL}/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
    }).then(response => {
      console.log(response);
      return response.json();
    }).then((json) => {
      console.log(json);
    })
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="usuário"
          type="text" 
          name="username"
          value={username}
          onChange={({target}) => setUsername(target.value)}
        />
        <h1>{username}</h1>
        <Input label="Senha" 
          type="password" 
          name="password"
          value={password}
          onChange={({target}) => setPassword(target.value)}
        />
        <h1>{password}</h1>
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm;