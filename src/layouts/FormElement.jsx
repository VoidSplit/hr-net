import { SelectMenu } from 'voidsplit_select_component';
import './styles/formElement.css'
import TextInput from '../components/TextInput';
import DateInput from '../components/DateInput';
import NumberInput from '../components/NumberInput';
import Field from '../components/Field';
import Label from '../components/Label';

import { states, department } from '../data/selectMenusInfos';

export default function FormElement({ firstNameRef, lastNameRef, dateOfBirthRef, startDateRef, departementRef, streetRef, cityRef, stateRef, zipCodeRef }) {

    return (
        <>
            <form className="formElement" action="#">
                <div className="column">
                    <TextInput innerRef={firstNameRef} id={"firstname"} name={"firstname"} placeholder={""} value={""} label={"First Name"} />
                    <TextInput innerRef={lastNameRef} id={"lastname"} name={"lastname"} placeholder={""} value={""} label={"Last Name"} />
                    <DateInput innerRef={dateOfBirthRef} id={"dateofbirth"} name={"dateofbirth"} placeholder={""} value={""} label={"Date of Birth"} />
                    <DateInput innerRef={startDateRef} id={"startdate"} name={"startdate"} placeholder={""} value={""} label={"Start Date"} />
                    <div className="select-wrap">
                        <Label display={"Departement"} isFor={"departement"}/>
                        <SelectMenu innerRef={departementRef} data={department} id="departement"/>
                    </div>
                </div>
                <div className="column">
                    <Field id="field-wrapper" label="Adress">
                        <TextInput innerRef={streetRef} id={"street"} name={"street"} placeholder={""} value={""} label={"Street"} />
                        <TextInput innerRef={cityRef} id={"city"} name={"city"} placeholder={""} value={""} label={"City"} />
                        <div className="select-wrap">
                            <Label display={"State"}  isFor={"states"}/>
                            <SelectMenu innerRef={stateRef} data={states} id="states"/>
                        </div>
                        <NumberInput innerRef={zipCodeRef} id={0} name={"1"} value={"0"} label={"Zip Code"} />
                    </Field>
                </div>
            </form>
        </>
    );
};