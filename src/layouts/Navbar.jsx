import { useNavigate } from 'react-router-dom';
import './styles/navbar.css'

export default function Navbar({links}) {
    const navigate = useNavigate();

    const handleClick = (url) => {
        navigate(url);
    }

    return (
        <div className="navbar">
            <div className="logo">HR-NET</div>
            <div className="actions">
                {links.map((l, index) => <p key={index} onClick={() => {
                    handleClick(l.link)
                }} variant="text">{l.display}</p>)}
            </div>
        </div>
    );
};