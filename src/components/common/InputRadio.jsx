export default function InputRadio(props) {
    return (
        <div className={`input-radio ${props.className}`}>
            <input
                className="input-radio__input"
                type="radio"
                id={props.id}
                name={props.name}
                value={props.value}
            />
            <label className="input-radio__label" htmlFor={props.id}>
                {props.label}
            </label>
        </div>
    );
}
