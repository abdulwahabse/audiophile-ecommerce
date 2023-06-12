export default function Input(props) {
    return (
        <div className={`input  ${props.className}`}>
            <div className="input__label-container">
                <label className="input__label" htmlFor={props.id}>
                    {props.label}
                </label>
            </div>
            <input
                className="input__input"
                type={props.type}
                id={props.id}
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                required={props.required}
            />
        </div>
    );
}
