import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styles from './ContactsList.module.css';
import { removeContact } from '../../redux/phoneBook/actions';
import ContactItem from '../ContactItem/ContactItem';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter.toLowerCase());
  const filteredContacts = contacts.filter(contact =>
    contact.name ? contact.name.toLowerCase().includes(filter) : contacts,
  );
  const dispatch = useDispatch();

  return (
    <ul className={styles.ul}>
      {filteredContacts.map(contact => (
        <ContactItem
          id={contact.id}
          name={contact.name}
          number={contact.number}
          handleDelete={id => dispatch(removeContact(id))}
        />
      ))}
    </ul>
  );
};

export default ContactsList;

// ========= удаление контакта без хуков========

// import { connect } from 'react-redux';

// const ContactsList = ({ state, removeContact }) => {
//   console.log(state);
//   return (
//     <ul className={styles.ul}>
//       {state.contacts.items.map(contact => (
//         <ContactItem
//           id={contact.id}
//           name={contact.name}
//           number={contact.number}
//           handleDelete={removeContact}
//         />
//       ))}
//     </ul>
//   );
// };

// const mapStateToProps = state => {
//   // console.log({ state });
//   return { state };
// };

// const mapDispatchToProps = {
//   removeContact: removeContact,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
