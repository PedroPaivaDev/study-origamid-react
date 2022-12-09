import React from 'react';
import {perguntas} from './components/perguntas';

const App = () => {
  const [pergun, setPerguntas] = React.useState(0);
  const [marcadas, setMarcadas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });
  const [respostasCertas, setRespostasCertas] = React.useState(0);

  const renderPergunta = ({pergunta, options, resposta, id}) => {
    return <div>
      <section style={{border: '2px solid #d1d5db', padding: '30px', marginBottom: '20px'}}>
        <h4 style={{backgroundColor: 'white', marginTop: '-45px', boxSizing: 'content-box'}}>{pergunta}</h4>
        <div>{options.map((option, index) => (
          <label key={index}>
            <input 
              type="radio" 
              value={option} 
              onChange={({target}) => (setMarcadas({...marcadas, [id]: target.value}))}
              checked={marcadas[id] === option}
            />
            {option}
          </label>            
        ))}</div>
      </section>
      <button onClick={(event)=>{
        event.preventDefault();
        if (marcadas[id] === '') return;
        if (marcadas[id] === resposta) setRespostasCertas(respostasCertas+1);
        setPerguntas(pergun+1);
      }}>Próxima</button>
    </div>
  }

  console.log()
  
  return (
    <form>
      {
        pergun<Object.keys(perguntas).length ? 
        <section>{renderPergunta(perguntas[pergun])}</section> :
        <p>Você acertou: {respostasCertas} de 4 Perguntas</p>
      }
    </form>
  );
};

export default App;
