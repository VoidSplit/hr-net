/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "../layouts/Navbar";
import Title from "../components/Title";
import TableLayout from "../layouts/TableLayout";
import Pagination from "../components/Pagination";

import { useEffect, useState } from "react";

import store from "../redux/store";
import { changeEntries } from "../redux/actions";

export default function EmployeeList() {
    const [tablePage, changeTablePage] = useState(0)
    const [tableEntries, changeTableEntries] = useState(store.getState().entries)
    const [paginationList, setPaginationList] = useState([{page: 1, active: true}]);
    const [refresh, setRefresh] = useState(false);


    useEffect(() => {
        store.dispatch(changeEntries(parseInt(tableEntries)))

        calculatePagination()
    }, [tablePage, tableEntries])


    const calculatePagination = () => {
        if (store.getState().userList.length > 0) {
            const updatedPaginationList = [];
            for (let i = 1; i <= Math.ceil(store.getState().userList.length / tableEntries); i++) {
              let item = { page: 0, active: false };
              item.page = i;
              tablePage + 1 === item.page ? item.active = true : item.active = false;
              updatedPaginationList.push(item);
            }
            setPaginationList(updatedPaginationList);
          } else {
            const item = { page: 1, active: true };
            setPaginationList([item]);
          }
    }
    const handlePaginationRefresh = () => {
        setRefresh(!refresh);
        calculatePagination()
    };
    const handlePaginationActions = (props) => {
        switch (props.action) {
            case "change_page":
                changeTablePage(props.page - 1)
                break;
            case "change_entries":
                changeTableEntries(parseInt(props.entries))
                changeTablePage(0)
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Navbar links={[{display: "Create Employee", path: "/"}]}/>
            <main>
                <div className="fc">
                    <Title text="Current Employees" />
                    <TableLayout refreshPagination={handlePaginationRefresh} handleActions={handlePaginationActions} page={tablePage} entries={tableEntries} />
                    <div className="fr space-max">
                        {
                        store.getState().userList.length === 0 ? 
                            <p>Showing 0 entries</p> : 
                                store.getState().userList.length === 1 ? 
                            <p>Showing 1 of 1 entries</p> : 
                                <p>Showing {tablePage*tableEntries + 1} to {tableEntries > store.getState().userList.length ? store.getState().userList.length: tableEntries} of {store.getState().userList.length} entries</p>
                        }
                        <Pagination key={refresh} pages={paginationList} handleActions={handlePaginationActions} />
                    </div>
                </div>
            </main>
        </>
    );
};