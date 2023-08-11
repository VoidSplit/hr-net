import Label from "./Label";
import './styles/dateInput.css'
export default function DateInput({innerRef, id, name, placeholder, value, label}) {
    return (
        <>
            <div className="date-field-wrapper">
                {label && <Label isFor={id} display={label} />}
                <input ref={innerRef} type="date" id={id} name={name} placeholder={placeholder} defaultValue={value} />
            </div>
        </>
    );
};