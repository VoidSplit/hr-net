import { useNavigate } from 'react-router-dom';
import './styles/navbar.css'
export default function Navbar({links}) {
    
    const navigate = useNavigate();

    const handleClick = (url) => {
        navigate(url);
    }
    return (
        <nav className="navbar">
            <div className="logo">
                <span>HR-Net</span>
            </div>
            <div className="link">
                {links.map((l, i) => <p onClick={() => {handleClick(l.path)}} key={i}>{l.display}</p>)}
            </div>
        </nav>
    );
};