import './App.css';
import JokesApp from './components/JokesApp';
import jokesData from './jokesData';

export default function App() {
  const jokesElements = jokesData.map(joke => {
    return <JokesApp 
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
  })
  return (
    <div className="App">
        {jokesElements}
    </div>
  );
}



