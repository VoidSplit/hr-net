import { Button } from "@mui/material";
import Title from "../components/Title";
import Navbar from "../layouts/Navbar";

import { DataGrid, GridToolbar  } from '@mui/x-data-grid';

import { useState } from "react";


import store from '../redux/store';
import { removeUser } from "../redux/actions";

export default function EmployeeList(props) {
    const [rows, changeRows] = useState(store.getState().userList)
    const [selectedRows, setSelectedRows] = useState([]);

    const handleSelectionModelChange = (selection) => {
      setSelectedRows(selection);
    };
    const handleDeleteSelectedRows = () => {
        changeRows(store.getState().userList.filter(row => !selectedRows.includes(row.id)))
        let r_list = store.getState().userList.filter(row => !selectedRows.includes(row.id))
        store.dispatch(removeUser(r_list))
    }


    const columns = [
        { field: 'firstName', headerName: 'First name', flex: 1},
        { field: 'lastName', headerName: 'Last name', flex: 1},
        { field: 'start', headerName: 'Start Date', flex: 1},
        { field: 'departement', headerName: 'Departement', flex: 1},
        { field: 'birth', headerName: 'Date of Birth', flex: 1},
        { field: 'street', headerName: 'Street', flex: 1},
        { field: 'city', headerName: 'City', flex: 1},
        { field: 'state', headerName: 'State', flex: 1},
        { field: 'zip', headerName: 'Zip Code', flex: 1},
      ];
    return (
        <div className="layout">
            <Navbar links={[
                {
                    display: "Create Employee",
                    link: "/"
                }
            ]}/>
            <div className="spaced">
                <Title display="Create Employee"/>
            </div>
            <div className="spaced">
                <div className="inbg" style={{height: 500, width: '100%'}}>
                    <DataGrid
                        getRowId={(row) => row.id}
                        rows={rows}
                        columns={columns}
                        
                        disableColumnFilter
                        disableColumnSelector
                        disableDensitySelector
                        disableRowSelectionOnClick
                        checkboxSelection
                        onRowSelectionModelChange={handleSelectionModelChange}
                        selectionModel={selectedRows}

                        slots={{ toolbar: GridToolbar }}
                        slotProps={{
                            toolbar: {
                                csvOptions: { disableToolbarButton: true },
                                printOptions: { disableToolbarButton: true },
                                showQuickFilter: true,
                                quickFilterProps: { debounceMs: 250 },
                            },
                        }}
                        initialState={{
                            filter: {
                                filterModel: {
                                    items: [],
                                    quickFilterValues: [''],
                                },
                            },
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            }
                        }}
                        
                        pageSizeOptions={[5, 10, 15]}
                    />
                    <Button style={{width: 250, margin: "15px 25px"}} variant="contained" onClick={handleDeleteSelectedRows}>Delete selected items</Button>
                </div>
            </div>
        </div>
    );
};