import './ContactForm.css';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewContact } from 'features/operations/operations';

const ContactForm = () => {
  const phonebook = useSelector(state => state.phonebook);
  const contacts = phonebook.contacts.items;
  const dispatch = useDispatch();
  const nameInput = useRef();
  const numberInput = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const name = nameInput.current.value;
    const number = numberInput.current.value;

    const namePattern =
      /^[a-zA-Zа-яА-Я]+([' -]?[a-zA-Zа-яА-Я ]?[a-zA-Zа-яА-Я]*)*$/;
    const isNameValid = namePattern.test(name);
    if (!isNameValid && name.length > 0) {
      alert(nameInput.current.title);
      return;
    }
    const numberPattern = /^\+?[\d\s-]+$/;
    let isNumberValid = numberPattern.test(number);
    if (!isNumberValid && number.length > 0) {
      alert(numberInput.current.title);
      return;
    }

    const matchPerson = contacts.find(pers => pers.name === name);
    if (matchPerson) {
      alert(`${matchPerson.name} is already in contacts`);
      return;
    }
    const person = {
      name: name,
      phone: number,
    };

    dispatch(addNewContact(person));
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="phonebookForm">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          ref={nameInput}
        />
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          ref={numberInput}
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};
export default ContactForm;
