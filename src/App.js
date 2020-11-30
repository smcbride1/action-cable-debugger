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
      <div className="outer-container">
        <div id="main-container">
          <div id="request-info">
            <ElementLabel text="Server Address"/>
            <InputBox className="fill-width-container" placeholder="Server Address..."/>
            <ElementLabel text="Channel"/>
            <InputBox className="fill-width-container" placeholder="Channel..."/>
            <ElementLabel text="Room"/>
            <InputBox className="fill-width-container" placeholder="Room..."/>
            <ElementLabel text="Payload"/>
            <InputArea className="fill-auto-container" placeholder="Payload..."/>
            <br></br>
            <Button text="Connect" className="fill-width-container" id="connect-button" onClick={connect}/>
          </div>
          <div id="response-info">
            <ElementLabel text="Log"/>
            <InputArea className="fill-auto-container" placeholder="Logs will appear here"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
