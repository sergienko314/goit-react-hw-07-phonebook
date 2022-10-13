
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addContact, updateContact } from 'redux/contactOperations';
import { useDispatch, useSelector } from 'react-redux';

const ContactForm = () => {
    const contacts = useSelector(state => state.contacts.contacts)

    const dispatch = useDispatch()
    
    const [name, setName] = useState()
    const [number, setNumber] = useState()
    
    const editContact = useSelector(state => state.contacts.editContact)
    
    useEffect(() => {
        if(editContact){ setName(editContact.name)
        setNumber(editContact.phone)}
       
     }, [editContact])
    
    const changeHandler = (e) => {
        if (e.target.name === "name") setName(e.target.value) ;
        if (e.target.name === "number") setNumber(e.target.value);

    }

    const submitHandler = e => {
        e.preventDefault();
        
        if (name.length > 1 && number.length > 1) {
            if (contacts.some((contact)=> contact.name === name)) { return alert("this contact olredy har")}
            const data = {
                id: uuidv4(),
                name: name,
                phone: number,
            };
            editContact ? dispatch(updateContact({...data, id:editContact.id})):dispatch(addContact(data))
            reset();
        }
        else{ alert("EROR <input is empty>");}
    };

    const reset = () => {
            setName("")
            setNumber("")
    };

        return (
            <form onSubmit={(e) => submitHandler(e)} action="">
                <label htmlFor="">Name:
                    <input
                        name="name"
                        value={name}
                        type="text"
                        onChange={changeHandler}
                    />
                </label>
                <label htmlFor=""> Number:
                    <input
                        
                        name="number"
                        value={number}
                        type="text"
                        onChange={changeHandler}
                    />

                </label>
                <button>Add contact</button>
            </form>
        );
}


export default ContactForm;


