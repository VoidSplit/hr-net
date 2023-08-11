import './styles/button.css'
export default function Button({action, display, type}) {
    return (
        <>
            <button className={`button button--${type}`} onClick={action}>
                {display}
            </button>
        </>
    );
};