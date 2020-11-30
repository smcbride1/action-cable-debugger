export default function ConnectedIndicator(props) {
    return(
        <div id="connected-indicator" className={props.connected ? "connected" : "disconnected"}>
            {props.connected ? "CONNECTED" : "DISCONNECTED"}
        </div>
    )
}