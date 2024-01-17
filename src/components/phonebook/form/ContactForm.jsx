import { Component } from 'react';
import { nanoid } from 'nanoid';
import style from './contactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
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
    const { name, number } = this.state;

    return (
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
        <label htmlFor={contactId}>Number</label>
        <input
          value={number}
          onChange={handleChange}
          id={contactId}
          className={style.inp}
          type="tel"
          name="number"
          required
        />
        <button className={style.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
