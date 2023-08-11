import Label from "./Label";
import './styles/numberInput.css'
export default function NumberInput({innerRef, id, name, value, label}) {
    return (
        <>
            <div className="number-field-wrapper">
                {label && <Label isFor={id} display={label} />}
                <input ref={innerRef} type="number" id={id} name={name} defaultValue={value} />
            </div>
        </>
    );
};