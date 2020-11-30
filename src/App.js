import logo from './logo.svg';
import './App.css';
import InputBox from './components/InputBox';
import InputArea from './components/InputArea';
import ElementLabel from './components/ElementLabel';
import Button from './components/Button';

function App() {
  const connect = () => {
  }

  return (
    <>
      <ElementLabel text="Server Address"/>
      <InputBox placeholder="Server Address..."/>
      <ElementLabel text="Channel"/>
      <InputBox placeholder="Channel..."/>
      <ElementLabel text="Room"/>
      <InputBox placeholder="Room..."/>
      <ElementLabel text="Payload"/>
      <InputArea placeholder="Payload..."/>
      <Button text="Connect" onClick={connect}/>
    </>
  );
}

export default App;
