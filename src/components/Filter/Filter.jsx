import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilterHandler = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <>
      <label className={css.filterLabel}>
        Find contacts by name  🔍 
      </label>
      <input
        className={css.filterInput}
        value={filter}
        onChange={changeFilterHandler}
        type="text"
        name="filter"
      />
    </>
  );
}

export default Filter;

