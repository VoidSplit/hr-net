import { SelectMenu } from 'voidsplit_select_component/src/lib/SelectMenu';
import './styles/formElement.css'
import TextInput from '../components/TextInput';
import DateInput from '../components/DateInput';
import NumberInput from '../components/NumberInput';
import Field from '../components/Field';

import { states, department } from '../data/selectMenusInfos';
import { data } from '../data/newSelectMenuInfo';
import { createRef } from 'react';
import Button from '../components/Button';
export default function FormElement({ firstNameRef, lastNameRef, dateOfBirthRef, startDateRef, departementRef, streetRef, cityRef, stateRef, zipCodeRef }) {
    let testRef = createRef(null)
    const handleClick = () => {
        console.log(testRef.current.value)
    }
    return (
        <>
            <form className="formElement" action="#">
                <div className="column">
                    <TextInput innerRef={firstNameRef} id={"firstname"} name={"firstname"} placeholder={""} value={""} label={"First Name"} />
                    <TextInput innerRef={lastNameRef} id={"lastname"} name={"lastname"} placeholder={""} value={""} label={"Last Name"} />
                    <DateInput innerRef={dateOfBirthRef} id={"dateofbirth"} name={"dateofbirth"} placeholder={""} value={""} label={"Date of Birth"} />
                    <DateInput innerRef={startDateRef} id={"startdate"} name={"startdate"} placeholder={""} value={""} label={"Start Date"} />
                    <SelectMenu innerRef={departementRef} data={department} label="Departement" />
                    <SelectMenu innerRef={testRef} label="Test" data={data} />
                </div>
                <div className="column">
                    <Field id="field-wrapper" label="Adress">
                        <TextInput innerRef={streetRef} id={"street"} name={"street"} placeholder={""} value={""} label={"Street"} />
                        <TextInput innerRef={cityRef} id={"city"} name={"city"} placeholder={""} value={""} label={"City"} />
                        <SelectMenu innerRef={stateRef} data={states} label="State" />
                        <NumberInput innerRef={zipCodeRef} id={0} name={"1"} value={"0"} label={"Zip Code"} />
                    </Field>
                    <Button action={handleClick} display={"Get Select_Menu Value"} type="normal"/>
                </div>
            </form>
        </>
    );
};