import logo from './logo.svg';
import './App.css';
import InputBox from './components/InputBox'

function App() {
  return (
    <>
      <InputBox placeholder="Server Address..."/>
      <InputBox placeholder="Channel..."/>
      <InputBox placeholder="Room..."/>
    </>
  );
}

export default App;
