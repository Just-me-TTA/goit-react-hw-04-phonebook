import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { MainTitle, Title, Wrapper } from './App.styled';

const CONTACTS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem(CONTACTS_KEY));
    savedContacts &&
      this.setState({
        contacts: savedContacts,
      });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const isExist = this.state.contacts.find(
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
    this.setState(prev => ({
      contacts: [...prev.contacts, contactObj],
    }));
  };

  deleteContact = e => {
    const contactToDelete = e.currentTarget.id;
    this.setState(prev => ({
      contacts: prev.contacts.filter(({ id }) => id !== contactToDelete),
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filterContactsByName = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
    return filteredContacts;
  };

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <MainTitle>Phonebook</MainTitle>
        <ContactForm addContact={this.addContact} />
        <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
        <Title>Contacts</Title>
        <ContactList
          contacts={this.filterContactsByName()}
          deleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}
