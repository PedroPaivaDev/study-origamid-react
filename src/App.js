import React from 'react';
import Input from './components/TextInput';

const App = () => {

  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: ''
  })

  const [response, setResponse] = React.useState();

  let id;

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((resolve) => {
      setResponse(resolve)
      console.log(resolve)
    }).catch((reject) => console.log(reject))
  }

  const handleChange = ({target}) => {
    id = target.id
    setForm({ ...form, [id]:target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input value={form.nome} onChange={handleChange} type="text" refe="nome">Nome</Input>
      <Input value={form.email} onChange={handleChange} type="email" refe="email">Email</Input>
      <Input value={form.senha} onChange={handleChange} type="password" refe="senha">Senha</Input>
      <Input value={form.cep} onChange={handleChange} type="text" refe="cep">Cep</Input>
      <Input value={form.rua} onChange={handleChange} type="text" refe="rua">Rua</Input>
      <Input value={form.numero} onChange={handleChange} type="number" refe="numero">Número</Input>
      <Input value={form.bairro} onChange={handleChange} type="text" refe="bairro">Bairro</Input>
      <Input value={form.cidade} onChange={handleChange} type="text" refe="cidade">Cidade</Input>
      <Input value={form.estado} onChange={handleChange} type="text" refe="estado">Estado</Input>
      {response && response.ok && <p>Formulário Enviado</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
