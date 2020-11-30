export default function Button(props) {
    return(
        <button id={props.id} className={props.className} onClick={props.onClick}>{props.text}</button>
    )
}