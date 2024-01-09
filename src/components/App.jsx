import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { MainTitle, Title, Wrapper } from './App.styled';

const CONTACTS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem(CONTACTS_KEY));
    savedContacts && setContacts(savedContacts);
  }, []);

  useEffect(() => {
    if (!contacts.length) {
      return;
    }
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isExist = contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase().trim()
    );
    const contactObj = {
      ...newContact,
      id: nanoid(),
    };
    if (isExist) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    setContacts(prev => [...prev, contactObj]);
  };

  const deleteContact = e => {
    const contactToDelete = e.currentTarget.id;
    setContacts(prev => prev.filter(({ id }) => id !== contactToDelete));
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const filterContactsByName = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
    return filteredContacts;
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <MainTitle>Phonebook</MainTitle>
      <ContactForm addContact={addContact} />
      <Filter filter={filter} handleFilter={handleFilter} />
      <Title>Contacts</Title>
      <ContactList
        contacts={filterContactsByName()}
        deleteContact={deleteContact}
      />
    </Wrapper>
  );
};
