import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsList.module.css';
import { deleteContact, fetchContacts } from 'redux/contactsReducer';
import { useEffect } from 'react';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const getContactFromFilter = () => {
    console.log(contacts);
    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterContacts;
  };

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const contactsFilter = getContactFromFilter();
  return (
    <ul className={css.list}>
      {contactsFilter.map(contact => {
        const { id, name, phone } = contact;
        return (
          <li className={css.contacts} key={id}>
            <span>{name}:</span>
            <span>{phone}</span>
            <button
              type="button"
              className={css.btnDelete}
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
