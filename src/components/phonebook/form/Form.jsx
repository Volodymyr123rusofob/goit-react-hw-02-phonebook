import { Component } from 'react';
import { nanoid } from 'nanoid';
import style from './form.module.css';

const INITIAL_STATE = {
  contacts: [],
  name: '',
};

class Form extends Component {
  contactId = nanoid();

  state = {
    ...INITIAL_STATE,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { contactId, handleSubmit, handleChange } = this;
    const { name } = this.state;
    return (
      <>
        <h2 className={style.h2}>Phonebook</h2>
        <form onSubmit={handleSubmit} className={style.form} action="">
          <label htmlFor={contactId}>Name</label>
          <input
            value={name}
            onChange={handleChange}
            id={contactId}
            className={style.inp}
            type="text"
            name="name"
            required
          />
          <button className={style.btn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default Form;
