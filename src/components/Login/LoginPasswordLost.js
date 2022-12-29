import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { PASSWORD_LOST } from '../../service/api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const {data, loading, error, request} = useFetch();

  const urlLocation = window.location.href.replace('perdeu', 'resetar');

  async function handleSubmit(event) {
    event.preventDefault();
    if(login.validate()) {
      const {url, options} = PASSWORD_LOST({login:login.value, url:urlLocation});
      const {json} = await request (url, options);
    }    
  } /* essa url deve ser a do site que eu fiz o deploy */

  return (
    <section className='animeLeft'>
      <Head title="Lost" />
      <h1 className='title'>Perdeu a senha?</h1>
      {data ? <p style={{color: '#4c1'}}>{data}</p> : 
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar email</Button>}
        </form>
      }
      <Error error={error}/>
    </section>
  )
}

export default LoginPasswordLost;