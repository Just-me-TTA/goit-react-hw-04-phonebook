import { BinIcon, DelButton, Item, Letter } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <Letter>{contact.name[0]}</Letter>
          {contact.name}: {contact.number}
          <DelButton type="button" id={contact.id} onClick={deleteContact}>
            <BinIcon />
          </DelButton>
        </Item>
      ))}
    </ul>
  );
};
