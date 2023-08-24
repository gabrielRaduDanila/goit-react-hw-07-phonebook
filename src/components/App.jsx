import ContactForm from './contact-form/ContactForm';
import ContactList from './contact-list/ContactList';
import Filter from './filter/Filter';
import { useSelector } from 'react-redux';
import Modal from './modal/Modal';

export const App = () => {
  const { contacts, filter } = useSelector(store => store.phonebook);
  const { isOpen } = useSelector(state => state.modal);
  return (
    <div style={{ padding: 20 }}>
      <h1>Phonebook</h1>
      <div>
        <h2>Contacts</h2>
        <ContactForm contacts={contacts} />
      </div>
      {contacts.length > 0 && <Filter />}
      {contacts.length > 0 && filter.length === 0 && (
        <ContactList contacts={contacts} />
      )}
      {filter.length > 0 && <ContactList />}
      {contacts.length === 0 && filter.length === 0 && (
        <h3>Add contacts to be displayed</h3>
      )}
      {isOpen && <Modal />}
    </div>
  );
};
