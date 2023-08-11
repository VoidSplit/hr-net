import Navbar from "../layouts/Navbar";
import Title from "../components/Title";
import FormElement from "../layouts/FormElement";
import Button from "../components/Button";
import { createRef } from "react";
import store from "../redux/store";
import { addUser } from "../redux/actions";

export default function Home() {
    
    const firstNameRef =        createRef(null)
    const lastNameRef =         createRef(null)
    const dateOfBirthRef =      createRef(null)
    const startDateRef =        createRef(null)
    const departementRef =      createRef(null)
    const streetRef =           createRef(null)
    const cityRef =             createRef(null)
    const stateRef =            createRef(null)
    const zipCodeRef =          createRef(null)

    const handleFormSubmit = () => {
        
        const user = {
            "firstName": firstNameRef.current.value,
            "lastName": lastNameRef.current.value,
            "startDate": startDateRef.current.value,
            "departement": departementRef.current.dataset.value,
            "dateOfBirth": dateOfBirthRef.current.value,
            "street": streetRef.current.value,
            "city": cityRef.current.value,
            "state": stateRef.current.dataset.value,
            "zipCode": zipCodeRef.current.value,

            "id": `${Date.now().toString(36)}${Math.random().toString(36).substring(2, 5)}`
        }

        store.dispatch(addUser(user))
    };
    return (
        <>
            <Navbar links={[{display: "View Current Employees", path: "/employee-list"}]}/>
            <main>
                <div className="fc">
                    <Title text="Create Employee"/>
                    <FormElement
                        firstNameRef={firstNameRef}
                        lastNameRef={lastNameRef}
                        dateOfBirthRef={dateOfBirthRef}
                        startDateRef={startDateRef}
                        departementRef={departementRef}
                        streetRef={streetRef}
                        cityRef={cityRef}
                        stateRef={stateRef}
                        zipCodeRef={zipCodeRef}
                    />
                    <Button action={handleFormSubmit} display={"Save"} type="normal"/>
                </div>
            </main>
        </>
    );
};