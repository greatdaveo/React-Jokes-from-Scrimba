import './App.css';
import JokesApp from './components/JokesApp.';
import jokesData from './jokesData';

export default function App() {
  const jokesElements = jokesData.map(joke => {
    return <JokesApp setup={JokesApp.setup} punchline={JokesApp.punchline} />
  })
  return (
    <div className="App">
        {jokesElements}
    </div>
  );
}


/* <JokesApp 
      setup="I got my daughter a fridge for her birthday."
      punchline="I can't wait to see her face light up when she "
      />

      <JokesApp 
      setup="How did the hacker escape the police?" 
      punchline="He just ransomware!"
      />
   
      <JokesApp 
      setup="Why don't pirates travel on mountain roads." 
      punchline="Scurvy."
      />
      <JokesApp 
      setup="Why do bees stay in the hive in the winter?" 
      punchline="Swarm."
      />
      <JokesApp 
      setup="What's the best thing about Switzerland?"
      punchline="I don't know, but the flag is a big plus!"
      /> */
