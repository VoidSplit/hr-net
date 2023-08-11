import { useEffect, useState } from 'react';
import { removeUser } from '../redux/actions';
import store from '../redux/store';
import './styles/table.css'
export default function Table({refreshPagination, page, entries}) {
    const [list, changeList] = useState(store.getState().userList)
    const handleListDelete = (uid) => {
        refreshPagination()
        changeList(store.getState().userList.filter(user => user.id !== uid))
    }
    
    useEffect(() => {
        store.dispatch(removeUser(list))
    })
    return (
        <div className="table">
            <div className="table-top">
                <div className="col"> <span>First Name      </span> </div>
                <div className="col"> <span>Last Name       </span> </div>
                <div className="col"> <span>Start Date      </span> </div>
                <div className="col"> <span>Departement     </span> </div>
                <div className="col"> <span>Date of Birth   </span> </div>
                <div className="col"> <span>Street          </span> </div>
                <div className="col"> <span>City            </span> </div>
                <div className="col"> <span>State           </span> </div>
                <div className="col"> <span>Zip Code        </span> </div>
                <div className="col"> <span>Delete        </span> </div>
            </div>
            <div className="rows">
                
                {list && list.length > 0 ? list.slice(page*entries,page*entries + entries).map((el, k) =>
                    <div className="row" key={k}>
                        <div className="col"> <span>{ el.firstName }      </span> </div>
                        <div className="col"> <span>{ el.lastName }       </span> </div>
                        <div className="col"> <span>{ el.startDate }      </span> </div>
                        <div className="col"> <span>{ el.departement }    </span> </div>
                        <div className="col"> <span>{ el.dateOfBirth }    </span> </div>
                        <div className="col"> <span>{ el.street }         </span> </div>
                        <div className="col"> <span>{ el.city }           </span> </div>
                        <div className="col"> <span>{ el.state }          </span> </div>
                        <div className="col"> <span>{ el.zipCode }        </span> </div>
                        <div className="col"> <span className='delete-btn' onClick={() => {handleListDelete(el.id)}}>Delete</span> </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};


