import './Modal.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'features/modal/modalSlice';
import { removeContact } from 'features/phonebook/phonebookSlice';

const Modal = () => {
  const dispatch = useDispatch();
  const { id, contactName } = useSelector(state => state.modal);
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove the {contactName} contact?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(removeContact({ id }));
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
