import { useDispatch, useSelector } from 'react-redux';
import './ContactList.css';
import { openModal, setId, setName } from 'features/modal/modalSlice';

const findFilteredContacts = (contacts, filter) => {
  const typedName = filter.toLowerCase();
  const filterdContact = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(typedName);
  });
  return filterdContact;
};

const ContactList = () => {
  const { filter, contacts } = useSelector(state => state.phonebook);
  const dispatch = useDispatch();

  const contactsToDisplay = filter
    ? findFilteredContacts(contacts, filter)
    : contacts;

  return (
    <div>
      <h2>Contacts</h2>
      <ul className="contacts-list">
        {contactsToDisplay.map(contact => {
          const contactId = contact.id;
          return (
            <li key={contactId}>
              <p>
                <span>{capitalizeName(contact.name)}: </span>
                {contact.number}
              </p>
              <button
                type="button"
                className="remove-button"
                onClick={() => {
                  dispatch(setId({ id: contactId }));
                  dispatch(setName({ name: contact.name }));
                  dispatch(openModal());
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContactList;

function capitalizeName(name) {
  const words = name.split(/[ -]/);
  const capitalizedWords = words.map(
    word => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const capitalizedName = capitalizedWords.join(' ');
  return capitalizedName;
}
