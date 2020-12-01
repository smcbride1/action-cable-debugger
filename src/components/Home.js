import React, { useState } from 'react';
import ActionCable from 'actioncable';

import InputBox from './InputBox';
import InputArea from './InputArea';
import ElementLabel from './ElementLabel';
import Button from './Button';
import ConnectedIndicator from './ConnectedIndicator';

export default function Home() {
    const [connected, setConnected] = useState(false);
    const [url, setURL] = useState(null);
    const [channel, setChannel] = useState(null);
    const [room, setRoom] = useState(null);
    const [payload, setPayload] = useState(null);
    const [log, setLog] = useState(null);
    const [connecting, setConnecting] = useState(false);
    const [connectStatus, setConnectStatus] = useState("disconnected");
    const [consumerSubscription, setConsumerSubscription] = useState(null);
    
    const timeoutDuration = 5000;
    let consumer = null;

    let lastSentTime = 0;

    const connect = () => {
        setConnectStatus("connecting");

        let urlValue = document.getElementById("url").value;
        let channelValue = document.getElementById("channel").value;
        let roomValue = document.getElementById("room").value;
        let payloadValue = document.getElementById("payload").value;

        if (!(urlValue.includes("ws://") || urlValue.includes("wss://"))) {
            setConnectStatus("disconnected");
            appendLog("The URL's scheme must be either 'ws' or 'wss'")
            return
        }

        setURL(document.getElementById("url").value);
        setChannel(document.getElementById("channel").value);
        setRoom(document.getElementById("room").value);
        setPayload(document.getElementById("payload").value);
        
        consumer = ActionCable.createConsumer(urlValue);

        //setURL(consumer.url);

        try {
            console.log(consumer)
            setConsumerSubscription(consumer.subscriptions.create({ channel: channelValue }, {
                received(data){
                    appendLog(`Recieved Payload: ${JSON.stringify(data)}`);
                },
                rejected(data){
                    setConnectStatus("disconnected");
                    appendLog(`REJECTED`);
                },
                connected(data){
                    clearTimeout(timeout);
                    setConnectStatus("connected");
                    appendLog(`CONNECTED to '${urlValue}'`)
                },
                disconnected(data){
                    setConnectStatus("disconnected");
                    appendLog(`DISCONNECTED`);
                }
            }))
            appendLog(`Attempting to connect to '${consumer.url}'`);
            let timeout = setTimeout(timeoutDisconnect, timeoutDuration);
        } catch(err) {
            setConnectStatus("disconnected");
            appendLog(err.message);
        }
        //ws://localhost:4000/cable
    }

    const timeoutDisconnect = () => {
        if (consumer.connection.disconnected) {
            appendLog(`TIMEOUT: Failed to connect to URL, make sure that the provided URL (${url}) is correct`);
            setConnectStatus("disconnected");
        } else {
            appendLog(`TIMEOUT: Failed to subscribe, make sure that the provided channel (${channel}) is correct`);
            consumer.disconnect();
        }
    }
    const disconnect = () => {
        setConnectStatus("disconnected");
    }

    const clearLog = () => {
        document.getElementById("log").value = "";
    }

    const appendLog = (text) => {
        console.log(text);
        const logElement = document.getElementById("log");
        logElement.value += (`[${Date.now().toString()}] ${text}` + '\r\n');
        logElement.scrollTop = logElement.scrollHeight;
    }
    
    const connectText = (connectStatus) => {
        switch(connectStatus){
            case "connecting":
                return "Connecting"
                break;
            case "connected":
                return "Disconnect"
                break;
            case "disconnected":
                return "Connect"
                break;
        }
    }

    const sendPayload = () => {
        let payloadValue = document.getElementById("payload").value;
        if (payloadValue === ""){
            appendLog("Payload must not be empty");
            return
        }
        try {
            let payloadParsed = JSON.parse(document.getElementById("payload").value);
            consumerSubscription.send(payloadParsed);
            appendLog("Sent payload");
        } catch (err) {
            appendLog(`Failed to send payload: ${err}`);
        }
    }

    return (
    <div className="outer-container">
        <div id="main-container">
        <div id="request-info">
            <div>
                <ElementLabel text="URL"/>
                <InputBox id="url" className="fill-width-container" placeholder="URL..."/>
            </div>
            <div>
                <ElementLabel text="Channel"/>
                <InputBox id="channel" className="fill-width-container" placeholder="Channel..."/>
            </div>
            <div>
                <ElementLabel text="Room"/>
                <InputBox id="room" className="fill-width-container" placeholder="Room..."/>
            </div>
            <ElementLabel disabled={connectStatus==="disconnected"} text="Payload"/>
            <InputArea id="payload" disabled={connectStatus==="disconnected"} className="fill-auto-container" placeholder="Payload..."/>
            <Button text="Send Payload" disabled={connectStatus==="disconnected"} className={`fill-width-container`} id="send-payload-button" onClick={sendPayload}/>
            <Button text={connectText(connectStatus)} disabled={connectStatus==="connecting"} className={`fill-width-container ${connectStatus}`} id="connect-button" onClick={connectStatus==="connected" ? disconnect : connect}/>
        </div>
        <div id="response-info">
            <ElementLabel text="Log"/>
            <ConnectedIndicator connectStatus={connectStatus}/>
            <Button text="CLEAR" className="small" onClick={clearLog}></Button>
            <InputArea id="log" readonly="true" className="fill-auto-container" placeholder="Logs will appear here"/>
        </div>
        </div>
    </div>
    );
}