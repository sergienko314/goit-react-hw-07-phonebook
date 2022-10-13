
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/contactOperations';
import { editeNewContact } from 'redux/contactSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);

  const renderContacts = () => {
    if (filter === '') {
      return contacts;
    } else {
      
      return contacts.filter(
        ({ name, phone }) =>
          name.includes(filter)||
          phone.includes(filter)
      );
    }
  };

  const contactList = renderContacts()
  console.log(contactList);

  return (
    <ul>
      {contactList.map(({ id, name, phone }) => {
        return (
          <li key={id}>
            {name}: {phone}{' '}
            <button style={{ margin: "10px"}} onClick={() => dispatch(deleteContact(id))}>
              Delete 🗑
            </button>
            <button
              onClick={() => dispatch(editeNewContact({ id, name, phone }))}
            >
              Edit ✏️
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
