export default function ConnectedIndicator(props) {
    return(
        <div className="connected-indicator">
            {props.connected ? "CONNECTED" : "DISCONNECTED"}
        </div>
    )
}