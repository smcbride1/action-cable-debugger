export default function InputArea(props) {
    return(
        <textarea disabled={props.disabled} className={`${props.className} ${props.disabled ? "disabled" : ""}`} placeholder={props.placeholder}></textarea>
    )
}