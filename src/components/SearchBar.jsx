import Label from "./Label";
import './styles/searchBar.css'
export default function SearchBar({id, label}) {
    return (
        <>
        <div className="searchbar-wrapper">
            {label && <Label isFor={id} display={label} />}
            <input type="search" className="searchbar" />
        </div>
        </>
    );
};