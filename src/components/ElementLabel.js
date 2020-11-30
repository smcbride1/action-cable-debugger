export default function ElementLabel(props) {
    return(
        <p disabled={props.disabled} className={`element-label ${props.disabled ? "disabled" : ""}`}>{props.text}</p>
    )
}