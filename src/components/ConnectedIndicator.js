export default function ConnectedIndicator(props) {
    return(
        <div id="connected-indicator" className={props.connectStatus}>
            {props.connectStatus.toUpperCase()}
        </div>
    )
}