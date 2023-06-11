import React from 'react';
import { nanoid } from 'nanoid';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineUserAdd } from 'react-icons/ai';
import {SearchFormStyled, LabelName, InputName, LabelNumber, InputNumber, Button} from '../component_form/ContactForm.styled';
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
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <LabelName htmlFor={this.nameId}>
          <AiOutlineUserAdd />
          Name
          <InputName
            type="text"
            name="name"
            value={name}
            onChange={this.handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelName>
        <LabelNumber>
          <AiOutlinePhone />
          Number
          <InputNumber
            type="tel"
            name="number"
            value={number}
            onChange={this.handleNameChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelNumber>

        <Button type="submit">
          Add contact
        </Button>
      </SearchFormStyled>
    );
  }
}
