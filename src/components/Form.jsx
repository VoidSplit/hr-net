import './styles/form.css'
export default function Form(props) {
    return (
        <div className="form">
            {props.children}
        </div>
    );
};