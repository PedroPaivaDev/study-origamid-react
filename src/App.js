import React from 'react';
import InputText from './components/InputText';
import Radio from './components/Radio';
import Select from './components/Select';
import Checkbox from './components/Checkbox';
import InputCEP from './components/InputCEP';
import useForm from './hooks/useForm';
import Input from './components/Input';

const App = () => {
  const email = useForm('email');

  const [nome, setNome] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [fruta, setFruta] = React.useState([]);
  const [termos, setTermos] = React.useState([]);
  const [cep, setCep] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (email.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <InputText label="Nome" id="nome" type="text" value={nome} setValue={setNome} placeholder="Pedro"/>
      <Input label="Email" id="email" type="email" {...email} />
      <h3>Cores</h3>
      <Radio options={['azul', 'verde', 'amarelo']} value={cor} setValue={setCor}/>
      <Select options={['Notebook', 'Smartphone', 'Tablet']} value={produto} setValue={setProduto}/>
      <h3>Frutas</h3>
      <Checkbox options={['Uva', 'Laranja', 'Limão']} value={fruta} setValue={setFruta}/>
      <InputCEP label="CEP" id="cep" type="number" value={cep} setValue={setCep} placeholder="00000-000"/>
      <h3>Termos e condições</h3>
      <Checkbox options={['Li e aceito os termos e condições']} value={termos} setValue={setTermos}/>
      <button>Enviar</button>
    </form>
  );
};

export default App;
