import React from 'react';
import css from '../component_form/Form.module.css';
import { nanoid } from 'nanoid';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineUserAdd } from 'react-icons/ai';
// import shortid from "shortid";
export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };
  //id
  // nameInputId = shortid.generate();
  nameId = nanoid();
  //---- Опрацювання полів форми -----
  handleNameChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
      id: this.nameId,
    });
  };
  //---- Опрацювання форми -----
  handleSubmit = evt => {
    evt.preventDefault();
    //Виклик функції  Submit
    this.props.onSubmit(this.state);
    console.log(this.state);
    // Очишення
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '', id: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label htmlFor={this.nameId} className={css.label_name}>
          <AiOutlineUserAdd />
          Name
          <input
            type="text"
            name="name"
            className={css.input_name}
            value={name}
            onChange={this.handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label_number}>
          <AiOutlinePhone />
          Number
          <input
            type="tel"
            name="number"
            className={css.input_number}
            value={number}
            onChange={this.handleNameChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={css.form_button}>
          Add contact
        </button>
      </form>
    );
  }
}
