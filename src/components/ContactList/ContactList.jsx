import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Empty } from 'antd';

import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import Loader from '../Loader/Loader';
import ContactItem from '../ContactItem/ContactItem';
import { ListContainer, LoaderWrap } from './ContactList.styled';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ListContainer>
      {isLoading && !error ? (
        <LoaderWrap>
          <Loader />
        </LoaderWrap>
      ) : filteredContacts.length === 0 && !error ? (
        <Empty />
      ) : (
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} contact={{ id, name, number }} />
        ))
      )}
    </ListContainer>
  );
}

export default ContactList;


