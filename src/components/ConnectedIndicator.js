export default function ConnectedIndicator(props) {
    
    const connectText = (connectStatus) => {
        switch(connectStatus) {
            case "connecting":
                return "CONNECTING"
                break;
            case "connected":
                return "CONNECTED"
                break;
            case "disconnected":
                return "DISCONNECTED"
                break;
        }
    }
    
    return(
        <div id="connected-indicator" className={props.connectStatus}>
            {props.connectStatus.toUpperCase()}
        </div>
    )
}