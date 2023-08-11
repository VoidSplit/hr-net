import './styles/label.css'
export default function Label({isFor, display}) {
    return (
        <>
            <label className='label' htmlFor={isFor}>{display}</label>
        </>
    );
};