import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './phonebook/form/ContactForm';
import ListContacts from './phonebook/listContacts/ListContacts';
import FilterContact from './phonebook/filter/Filter';

import style from './app.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  isDublicate({ name }) {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();

    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      return normalizedCurrentName === normalizedName;
    });
    return Boolean(dublicate);
  }

  addContact = data => {
    if (this.isDublicate(data)) {
      return alert(`Contact ${data.name} already in list`);
    }
    this.setState(({ contacts }) => {
      const newContact = {
        id: nanoid(),
        ...data,
      };
      return { contacts: [...contacts, newContact] };
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      const newContact = contacts.filter(item => item.id !== id);

      return {
        contacts: newContact,
      };
    });
  };

  changeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  getFilteredContact() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();

    const FilteredContact = contacts.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(normalizedFilter);
    });
    return FilteredContact;
  }

  render() {
    const { addContact, deleteContact, changeFilter } = this;
    const name = this.getFilteredContact();

    return (
      <div className={style.box}>
        <div className={style.boxdiv}>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={addContact} />
          <div className={style.div}>
            <h2 className={style.h2}>Contacts</h2>
            <FilterContact changeFilter={changeFilter} />
            <ListContacts items={name} deleteContact={deleteContact} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
