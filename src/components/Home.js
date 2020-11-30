import React, { useState } from 'react';

import InputBox from './InputBox';
import InputArea from './InputArea';
import ElementLabel from './ElementLabel';
import Button from './Button';
import ConnectedIndicator from './ConnectedIndicator';

export default function Home() {
    const [connected, setConnected] = useState(false);
    const [serverAddress, setServerAddress] = useState(false);
    const [channel, setChannel] = useState(false);
    const [room, setRoom] = useState(false);
    const [payload, setPayload] = useState(false);
    const [log, setLog] = useState(false);

    const connect = () => {
    setServerAddress(document.getElementById("server-address").value);
    setChannel(document.getElementById("channel").value);
    setRoom(document.getElementById("room").value);
    setPayload(document.getElementById("payload").value);
    }

    const clearLog = () => {
    document.getElementById("log").value = "";
    }

    return (
    <div className="outer-container">
        <div id="main-container">
        <div id="request-info">
            <ElementLabel text="Server Address"/>
            <InputBox id="server-address" className="fill-width-container" placeholder="Server Address..."/>
            <ElementLabel text="Channel"/>
            <InputBox id="channel" className="fill-width-container" placeholder="Channel..."/>
            <ElementLabel text="Room"/>
            <InputBox id="room" className="fill-width-container" placeholder="Room..."/>
            <ElementLabel disabled={!connected} text="Payload"/>
            <InputArea id="payload" disabled={!connected} className="fill-auto-container" placeholder="Payload..."/>
            <br></br>
            <Button text="Connect" className="fill-width-container" id="connect-button" onClick={connect}/>
        </div>
        <div id="response-info">
            <ElementLabel text="Log"/>
            <ConnectedIndicator connected={connected}/>
            <Button text="CLEAR" className="small" onClick={clearLog}/>
            <InputArea id="log" readonly="true" className="fill-auto-container" placeholder="Logs will appear here"/>
        </div>
        </div>
    </div>
    );
}