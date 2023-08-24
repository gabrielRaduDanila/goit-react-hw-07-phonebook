import './Filter.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'features/phonebook/phonebookSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state.phonebook);

  const handleChange = e => {
    const searchInput = e.target;
    const typedName = searchInput.value.trim();
    dispatch(addFilter({ typedName }));
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        className="filter-input"
        type="text"
        name="searchName"
        title="Type the contact you want to find"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};
export default Filter;
