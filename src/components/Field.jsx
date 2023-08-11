import Label from "./Label";

import './styles/field.css'
export default function Field(props) {
    return (
        <>
    <div className="field-wrapper">
        {props.label && <Label isFor={props.id} display={props.label}/>}
        <div className="field">
            {props.children}
        </div>
    </div>
        </>
    );
};