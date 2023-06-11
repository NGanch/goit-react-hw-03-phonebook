import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { ContactsList, ContactsItem, ContactsName, ContactsNumber, Button } from '../component_ContactList/ContactList.styled';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <AiOutlinePhone color = "rgb(73, 136, 195)" />
          <ContactsName>
            {name}:<ContactsNumber>{number}</ContactsNumber>
          </ContactsName>
          <Button
            type="submit"
            onClick={() => onDeleteContact(id)}
          >
            {' '}
            Delete <AiOutlineUserDelete  align-self="center" />
          </Button>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};
