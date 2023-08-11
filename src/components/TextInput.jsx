import Label from "./Label";
import './styles/textInput.css'
export default function TextInput({innerRef, id, name, placeholder, value, label}) {
    return (
        <>
            <div className="field-wrapper">
                {label && <Label isFor={id} display={label} />}
                <input ref={innerRef} type="text" id={id} name={name} placeholder={placeholder} defaultValue={value} />
            </div>
        </>
    );
};