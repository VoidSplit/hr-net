import { useState } from 'react'
import Label from './Label'
import './styles/selectMenu.css'
export default function SelectMenu({innerRef, handleActions, list, label, selectedItem}) {
    let displayItem;
    selectedItem ? displayItem = list.filter(e => e.name === selectedItem)[0].abbreviation : displayItem = list[0].abbreviation
    let displayList = [...list].filter(item => item.abbreviation !== displayItem)
    const [usedList, changeList] = useState(displayList)
    const [selected, changeSelected] = useState(displayItem)
    let handleClick = (e) => {
        changeList(list.filter(item => item.name !== e.target.innerText))
        changeSelected(list.filter(item => item.name === e.target.innerText)[0].abbreviation)
        handleActions && handleActions({action: "change_entries", "entries": list.filter(item => item.name === e.target.innerText)[0].abbreviation})
    }
 
    return (
        <>
            <div className="select-wrapper">
                {label && <Label isFor={null} display={label}/>}
                <div className="selectMenu">
                    <div className="display" ref={innerRef} data-value={selected}>
                        {selected}
                        <div className="arrow-indicator">
                            <svg viewBox="0 0 100 100">
                                <polygon points="50 25, 100 100, 0 100"/>
                            </svg>
                        </div>
                    </div>
                    <ul>
                        {usedList.map((e, i) => <li key={i} onClick={handleClick}>{e.name}</li>)}
                    </ul>   
                </div>
            </div>
        </>
    );
};
