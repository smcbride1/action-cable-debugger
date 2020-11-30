export default function InputArea(props) {
    return(
        <textarea readonly={props.readonly} disabled={props.disabled} className={`${props.className} ${props.disabled ? "disabled" : ""}`} placeholder={props.placeholder}></textarea>
    )
}