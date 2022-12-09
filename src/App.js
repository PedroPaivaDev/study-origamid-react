import React from 'react';
import {perguntas} from './components/perguntas';

const respostas = perguntas.reduce((acc, field) => {
  return {
    ...acc, [field.id]:field.resposta,
  }
}, {})

const App = () => {
  const [pergun, setPerguntas] = React.useState(0);
  const [marcadas, setMarcadas] = React.useState(
    perguntas.reduce((acc, field) => {
      return {
        ...acc, [field.id]:'',
      }
    }, {})
  );
  const [respostasCertas, setRespostasCertas] = React.useState([]);

  React.useEffect(() => {
    if (pergun >= Object.keys(perguntas).length) {
      const arrayCertas = Object.keys(marcadas).filter((id)=> marcadas[id]===respostas[id]);
      setRespostasCertas(arrayCertas);
    }
  },[marcadas, pergun])
  
  const renderPergunta = ({pergunta, options, id}) => {
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
      {id!=='p1' && <button 
        style ={{marginRight: '10px'}}
        onClick={(event)=>{
          event.preventDefault();
          setPerguntas(pergun-1);
      }}>Anterior</button>}
      <button 
        onClick={(event)=>{
          event.preventDefault();
          if (marcadas[id] === '') return;
          setPerguntas(pergun+1);
      }}>Próxima</button>
    </div>
  }
  
  return (
    <form>
      {
        pergun<Object.keys(perguntas).length ? 
        <section>{renderPergunta(perguntas[pergun])}</section> :
        <p>Você acertou: {respostasCertas.length} de {Object.keys(perguntas).length} Perguntas</p>
      }
    </form>
  );
};

export default App;
