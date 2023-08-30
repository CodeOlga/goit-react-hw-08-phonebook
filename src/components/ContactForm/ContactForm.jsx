import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import toast, { Toaster } from 'react-hot-toast';
import { selectContacts } from 'redux/selectors';
import { ReactComponent as AddIcon } from '../icons/plus-user.svg';
import { Form, Label, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      name: name,
      number: number,
    };

    const isContactExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

      if (isContactExist) {
        toast.error(`${name} is already in contacts!`);
        //contact.name ???????
      return;
      }

    const isNumberExist = contacts.find(
      ({ number }) =>
        contact.number.replace(/\D/g, '') === number.replace(/\D/g, '')
    );

    if (isNumberExist) {
      toast.error(`${number} is already in contacts!`);
      //contact.number ???????
      return;
    }

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
      <Input
        type="text"
        name="name"
        // placeholder="Enter name"
        value={name}
        onChange={handleNameChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
      </Label>

      <Label>
        Number
      <Input
        type="tel"
        name="number"
        // placeholder="Enter phone number"
        value={number}
        onChange={handleNumberChange}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        />
        </Label>

      <Button type="submit">
        <AddIcon />
      </Button>
        <Toaster
          position="top-right"
          toastOptions={{
          duration: 1500,
          style: {
          borderRadius: '20px',
          padding: '16px',
          color: '#b83b5e',
          },
        }}
      />
    </Form>
  );
};

export default ContactForm;






