import { Component } from 'react';

import Form from './Phonebook/Form';
import ListContacts from './Phonebook/ListContacts';

import style from './app.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div className={style.box}>
        <div className={style.boxdiv}>
          <h2 className={style.h2}>Phonebook</h2>
          <Form />
          <div className={style.div}>
            <h2 className={style.h2}>Contacts</h2>
            <ListContacts />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// import { nanoid } from 'nanoid'
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
