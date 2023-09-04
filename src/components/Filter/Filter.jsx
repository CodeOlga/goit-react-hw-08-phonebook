import { useDispatch, useSelector } from 'react-redux';
import { FcSearch } from 'react-icons/fc';
import { selectContacts, selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { FilterInput, FilterTitle, InputWrap } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value.trim()));
  };

  return useSelector(selectContacts).length < 1 ? (
    <FilterTitle>Add your first contact</FilterTitle>
  ) : (
      <InputWrap>
        <FilterInput
          type="text"
          name="filter"
          placeholder="Search by name"
          value={filter}
          onChange={handleFilterChange}
          prefix={<FcSearch />}
        />
      </InputWrap>
  );
}

export default Filter;


