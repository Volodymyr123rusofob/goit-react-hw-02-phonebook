import { Component } from 'react';
import { nanoid } from 'nanoid';

import Form from './phonebook/form/Form';
import ListContacts from './phonebook/listContacts/ListContacts';

import style from './app.module.css';

class App extends Component {
  state = {
    contacts: [
      {
        name: '',
        id: nanoid(),
      },
    ],
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

  render() {
    const { contacts } = this.state;
    const { addContact, deleteContact } = this;

    return (
      <div className={style.box}>
        <div className={style.boxdiv}>
          <Form onSubmit={addContact} />
          <ListContacts items={contacts} deleteContact={deleteContact} />
        </div>
      </div>
    );
  }
}

export default App;
