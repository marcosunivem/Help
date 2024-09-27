import './App.css';
import Markdown from 'react-markdown';
import exercicios from './exercicios.json';

function App() {
  return (
    <div className="App">
      {exercicios.map(exercicio => (
        <div key={exercicio.id}>
          <Markdown>
            {exercicio.titulo}    
          </Markdown> 
          <Markdown>
            {exercicio.descricao}    
          </Markdown> 
        </div>
      ))}
    </div>
  );
}

export default App;
