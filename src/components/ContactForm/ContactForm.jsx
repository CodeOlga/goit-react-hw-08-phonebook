import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import toast, { Toaster } from 'react-hot-toast';
import { selectContacts } from 'redux/selectors';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name: name,
      number: number,
    };

    const isContactExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

      if (isContactExist) {
        toast.error(`${name} is already in contacts!`);
      return;
      }

    const isNumberExist = contacts.find(
      ({ number }) =>
        contact.number.replace(/\D/g, '') === number.replace(/\D/g, '')
    );

    if (isNumberExist) {
      toast.error(`${number} is already in contacts!`);
      return;
    }

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
      <FormInput
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
      </FormLabel>

      <FormLabel>
        Number
      <FormInput
        type="tel"
        name="number"
        value={number}
        onChange={handleNumberChange}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        />
        </FormLabel>

      <FormButton type="submit">
        Add
      </FormButton>

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






