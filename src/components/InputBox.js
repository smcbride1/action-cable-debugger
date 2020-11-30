export default function InputBox(props) {
    return(
        <input id={props.id} type="text" className={props.className} placeholder={props.placeholder}></input>
    )
}