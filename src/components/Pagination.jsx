import './styles/pagination.css'
export default function Pagination({pages, handleActions}) {
    let activePage = pages.filter(p => p.active === true)[0]
    let previousPage
    let nextPage
    if(activePage && activePage.page === 1) {
        pages.length >= 2 ? previousPage = 2 : previousPage = null
        pages.length >= 3 ? nextPage = 3 : nextPage = null
    } else {
        previousPage = activePage.page - 1
        pages.length >= activePage.page + 1 ? nextPage = activePage.page + 1 : nextPage = null
    }


    return (
        <>
        <div className="pagination">
            <div className="prev btn" onClick={() => {activePage.page - 1 > 0 ? handleActions({"action": "change_page", "page": previousPage}) : handleActions({"action": "do_nothing"})}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </div>
            {activePage.page === 1 ? <>
                <span className='active'>{activePage.page}</span>
                {previousPage && <span onClick={() => {handleActions({"action": "change_page", "page": previousPage})}}>{previousPage}</span>}
                {nextPage && <span onClick={() => {handleActions({"action": "change_page", "page": nextPage})}}>{nextPage}</span>}
            </>: <>
            
                {previousPage && <span onClick={() => {handleActions({"action": "change_page", "page": previousPage})}}>{previousPage}</span>}
                <span className='active'>{activePage.page}</span>
                {nextPage && <span onClick={() => {handleActions({"action": "change_page", "page": nextPage})}}>{nextPage}</span>}
            </>} 
            {nextPage !== null ? nextPage + 1 >= pages[pages.length-1].page ? null : <span>...</span> : null}
            {nextPage !== null ? nextPage && nextPage +  1 > pages[pages.length-1].page ? null : <span onClick={() => {handleActions({"action": "change_page", "page": pages[pages.length-1].page})}}>{pages[pages.length-1].page}</span> : null}
            <div className="next btn" onClick={() => {activePage.page === 1 ? handleActions({"action": "change_page", "page": 2}): nextPage && nextPage <= pages[pages.length-1].page ? handleActions({"action": "change_page", "page": nextPage}): handleActions({"action": "do_nothing"})}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path d="M458.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l137.3-137.4-137.3-137.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
            </div>
        </div>
        </>
    );
};