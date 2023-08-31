import Form from "../components/Form";
import Title from "../components/Title";
import Navbar from "../layouts/Navbar";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { SelectMenu } from 'voidsplit_select_component';

import { states, department } from "../data/select-menu";
import { Button, Modal, Typography } from "@mui/material";

import SaveAsIcon from '@mui/icons-material/SaveAs';
import { createRef, useState } from "react";

import store from "../redux/store";
import { addUser } from "../redux/actions";

export default function CreateEmployee() {
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const firstNameRef      =      createRef(null)
    const lastNameRef       =      createRef(null)
    const dateOfBirthRef    =      createRef(null)
    const startDateRef      =      createRef(null)
    const departementRef    =      createRef(null)
    const streetRef         =      createRef(null)
    const cityRef           =      createRef(null)
    const stateRef          =      createRef(null)
    const zipCodeRef        =      createRef(null)

    const saveEmployee = () => {
        const user = {
            "firstName": firstNameRef.current.value,
            "lastName": lastNameRef.current.value,
            "start": startDateRef.current.value,
            "departement": departementRef.current.value,
            "birth": dateOfBirthRef.current.value,
            "street": streetRef.current.value,
            "city": cityRef.current.value,
            "state": stateRef.current.value,
            "zip": zipCodeRef.current.value,
            "id": `${Date.now().toString(36)}${Math.random().toString(36).substring(2, 5)}`
        }
        store.dispatch(addUser(user))
        handleOpen()
    }

    return (
        <div className="layout">
            <Navbar links={[
                {
                    display: "View Current Employees",
                    link: "/employee-list"
                }
            ]}/>
            <div className="spaced">
                <Title display="Create Employee"/>
                <Form columns={2}>
                    <Box component="form" sx={{
                        backgroundColor: "#fff",
                        border: "1px solid #d9dfe8",
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        padding: "25px 50px",
                        width: "100%"
                    }} noValidate autoComplete="off">
                        <span className="box-label">Personal informations</span>
                        <TextField inputRef={firstNameRef} id="first-name" fullWidth required label="First Name" variant="outlined" />
                        <TextField inputRef={lastNameRef} id="last-name" fullWidth required label="Last Name" variant="outlined" />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker inputRef={dateOfBirthRef} label="Date of Birth" />
                            <DatePicker inputRef={startDateRef} label="Start Date" />
                        </LocalizationProvider>
                        <SelectMenu id="departement" innerRef={departementRef} data={department} label={"Department"}/>
                    </Box>
                    <Box component="form" sx={{
                        backgroundColor: "#fff",
                        border: "1px solid #d9dfe8",
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        padding: "25px 50px",
                        width: "100%"
                    }} noValidate autoComplete="off">
                        <span className="box-label">Adress</span>
                        <TextField inputRef={streetRef} id="street" fullWidth required label="Street" variant="outlined" />
                        <TextField inputRef={cityRef} id="city" fullWidth required label="City" variant="outlined" />
                        <SelectMenu id="states" innerRef={stateRef} data={states} label={"State"}/>
                        <TextField inputRef={zipCodeRef} id="zip-code" type="number" fullWidth required label="Zip Code" variant="outlined" />
                    </Box>
                    <div className="btn-wrapper">
                        <Button onClick={() => { saveEmployee() }} variant="contained" startIcon={<SaveAsIcon sx={{ fill: "#fff" }}/>}>
                            Save
                        </Button>
                    </div>
                </Form>
            </div>
            <Modal keepMounted open={open} onClose={handleClose} aria-labelledby="keep-mounted-modal-title" aria-describedby="keep-mounted-modal-description" >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: "auto",
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                  <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                    The new Employee has been created!
                  </Typography>
                </Box>
            </Modal>
        </div>
    );
};