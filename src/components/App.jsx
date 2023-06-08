import React from 'react';
import css from './App.module.css';
import { ContactForm } from './component_form/Form';
import { ContactList } from './component_ContactList/ContactList';
import { Filter } from './component_filter/Filter';

// import { nanoid } from "nanoid";

//  import shortid from "shortid";
// model.id = nanoid()
// let nameInBook = '';
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  // nameInputId = shortid.generate();

  //---------------Додавання контакту-----------------
  formSubmitHandler = data => {
    const nameInBook = this.state.contacts.some(
      ({ name }) => name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
    );
    if (nameInBook) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    }));
  };

  //---------------Видалення контакту-----------------
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  //---------------Фільтрація-----------------
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  //---------------Already in coctact-----------------
  filteredinContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  //--------------- Add to localStorage coctact -----------------
  componentDidMount() {
    const contact = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contact);
    console.log(parsedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  //--------------- Add to localStorage coctact -----------------
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('1');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const filterContants = this.filteredinContacts();
    // const normalizedFilter = this.state.filter.toLowerCase();
    // const filterContants = contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normalizedFilter));

    return (
      <section className={css.section}>
        <h1 className={css.title_phonebook}>Phonebook</h1>
        <ContactForm
          onSubmit={this.formSubmitHandler}
          onAlert={this.alertContact}
        />

        <div className={css.contact_container}>
          <h2 className={css.title_contact}>Contact</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={filterContants}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </section>
    );
  }
}
