import ContactForm from 'Component/ContactForm';
import ContactList from 'Component/ContactList';
import Filter from 'Component/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/contactOperations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook </h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
export default App;
