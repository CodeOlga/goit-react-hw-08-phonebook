import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactItem.module.css';

const ContactItem = ({contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.listItem} key={contact.id}>
      <p>{contact.name}: <span>{contact.number}</span></p>
      <button
        className={css.listBtn}
        type="button"
      
        onClick={handleDelete}>Delete</button>
    </li>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;