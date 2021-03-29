// import './App.css';
import { useSelector } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import styles from './App.module.css';

export default function App() {
  const contacts = useSelector(state => state.contacts.items);
  console.log(contacts);

  return (
    <>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={styles.title}>Contacts</h2>
      {contacts.length > 1 ? <Filter /> : null}

      {contacts.length < 1 && (
        <p className={styles.title}>You don't have contacts </p>
      )}
      <ContactsList />
    </>
  );
}
