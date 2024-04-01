export default function Input(props) {
    return (
        <div className={`input  ${props.className}`}>
            <div className="input__label-container">
                <label className="input__label" htmlFor={props.id}>
                    {props.label}
                    {props.required && <span className="mandatory">*</span>}
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
                aria-required={props.required}
            />
        </div>
    );
}
