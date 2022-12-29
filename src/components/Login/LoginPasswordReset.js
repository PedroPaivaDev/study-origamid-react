import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { PASSWORD_RESET } from '../../service/api';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';

const LoginPasswordReset = () => {

  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();
  const {error, loading, request} = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const URLkey = params.get('key');
    const URLlogin = params.get('login');
    if(URLkey) setKey(URLkey);
    if(URLlogin) setLogin(URLlogin);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if(password.validate()) {
      const {url, options} = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const {response} = await request(url, options);
      if(response.ok) navigate('/login');
    }
  }

  return (
    <div>
      <Head title="Reset" />
      <h1 className='title'>Redefinir a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" {...password}/>
        {loading ? <Button disabled>Resetando...</Button> : <Button>Redefinir senha</Button>}
      </form>
      <Error error={error} />
    </div>
  )
}

export default LoginPasswordReset;