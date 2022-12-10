import React from 'react';
import Radio from './components/Radio';
import {perguntas} from './components/perguntas';

const App = () => {
  const [respostas, setRespostas] = React.useState(
    perguntas.reduce((acc, field) => {
      return {
        ...acc, [field.id]:'',
      }
    }, {})
  );
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  function handleAnterior() {
      setSlide(slide - 1);
  }

  function handleProxima() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else if (respostas[perguntas[(perguntas.length-1)].id] !== '') {
      setSlide(slide + 1);
      resultadoFinal();
     }
  }
  
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <p>{resultado}</p>
      ) : (
        <>
          {slide!==0 && <button style={{marginRight: '15px'}} onClick={handleAnterior}>Anterior</button>}
          <button onClick={handleProxima}>Próxima</button>
        </>
      )}
    </form>
  );
};

export default App;
