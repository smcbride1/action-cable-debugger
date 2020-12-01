export default function Button(props) {
    return(
        <button id={props.id} disabled={props.disabled} className={`${props.className} ${props.disabled ? "disabled" : ""}`} onClick={props.onClick}>{props.text}</button>
    )
}