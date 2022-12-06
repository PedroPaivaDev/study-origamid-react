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

  // fetch('https://ranekapi.origamid.dev/json/api/usuario', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(form),
  // });

  let id;

  const handleInputChange = ({target}) => {
    id = target.id
    setForm({ ...form, [id]:target.value })
    console.log(target)
  }

  return (
    <form>
      <Input value={form.nome} onChange={handleInputChange} type="text" refe="nome">Nome</Input>
      <Input value={form.email} onChange={handleInputChange} type="email" refe="email">Email</Input>
      <Input value={form.senha} onChange={handleInputChange} type="password" refe="senha">Senha</Input>
      <Input value={form.cep} onChange={handleInputChange} type="text" refe="cep">Cep</Input>
      <Input value={form.rua} onChange={handleInputChange} type="text" refe="rua">Rua</Input>
      <Input value={form.numero} onChange={handleInputChange} type="number" refe="numero">Número</Input>
      <Input value={form.bairro} onChange={handleInputChange} type="text" refe="bairro">Bairro</Input>
      <Input value={form.cidade} onChange={handleInputChange} type="text" refe="cidade">Cidade</Input>
      <Input value={form.estado} onChange={handleInputChange} type="text" refe="estado">Estado</Input>
    </form>
  );
};

export default App;
