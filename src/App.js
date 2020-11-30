import logo from './logo.svg';
import './App.css';
import InputBox from './components/InputBox'
import ElementLabel from './components/ElementLabel';

function App() {
  return (
    <>
      <ElementLabel text="Server Address"/>
      <InputBox placeholder="Server Address..."/>
      <ElementLabel text="Channel"/>
      <InputBox placeholder="Channel..."/>
      <ElementLabel text="Room"/>
      <InputBox placeholder="Room..."/>
    </>
  );
}

export default App;
